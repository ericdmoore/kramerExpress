import { destinations, type ICalendarAST } from "./index.ts";
import { Client } from "@notionhq/client";
import { load as loadENVs } from "$std/dotenv/mod.ts";
import {
  NotionInpuDBid,
  NotionInput,
  NotionInputID,
  NotionInputUrl,
  QueryResultItem,
} from "./notion.types.ts";

// import util  from "node:util";

const convertQueryResultItemToPOJO = (i: unknown) => {
  const item = i as QueryResultItem;
  // console.log('>> ITEM:', util.inspect(item))

  const properties = Object.fromEntries(
    Object.entries(item.properties)
      .map(([k, v]) => {
        switch (v.type) {
          case "checkbox":
            return [k, v.checkbox];
          case "created_by":
            return [k, v.created_by];
          case "created_time":
            return [k, v.created_time];
          case "date":
            return [k, v.date];
          case "email":
            return [k, v.email];
          case "files":
            return [k, v.files];
          case "formula":
            return [k, v.formula];
          case "last_edited_by":
            return [k, v.last_edited_by];
          case "last_edited_time":
            return [k, v.last_edited_time];
          case "multi_select":
            return [k, v.multi_select];
          case "number":
            return [k, v.number];
          case "people":
            return [k, v.people];
          case "phone_number":
            return [k, v.phone_number];
          case "relation":
            return [k, v.relation];
          case "rich_text":
            return [k, v.rich_text];
          case "rollup":
            return [k, v.rollup];
          case "select":
            return [k, v.select];
          case "status":
            return [k, v.status];
          case "title":
            return [k, v.title];
          case "url":
            return [k, v.url];
          default:
            return [k, v];
        }
      }),
  );

  // WARNING: This is a very basic conversion, it is senstive to the data types (schema) in Notion
  const ret = {
    id: item.id,
    object: item.object,
    created_time: new Date(item.created_time),
    last_edited_time: new Date(item.last_edited_time),
    archived: item.archived,
    trashed: item.in_trash,
    url: item.url,
    public_url: item.public_url,
    created_by: item.created_by.id,
    last_edited_by: item.last_edited_by.id,
    cover: item.cover,
    icon: item.icon,
    parent: item.parent.database_id,
    properties: {
      raw: properties,
      parsed: properties,
    },
  };

  return ret;
};

const convertToAST = (i: unknown): ICalendarAST => {
  const pojo = convertQueryResultItemToPOJO(i);
  // console.log('>> POJO.Name:', )

  return {
    title: pojo.properties.raw.Name[0].plain_text,
    description: pojo.properties.raw["Location(link)"],
    location: pojo.properties.raw.Location[0].plain_text,
    isAllDay: !!pojo.properties.raw.allday,
    start: new Date(pojo.properties.raw.Dates.start),
    end: pojo.properties.raw.Dates.end
      ? new Date(pojo.properties.raw.Dates.end)
      : new Date(),
    busy: false,
    visibility: pojo.properties.raw.isPublic ? "public" : "private",
    attendees: [],
    alarms: pojo.properties.raw.Notifications,
    organizer: "the organizer",
    url: new URL(pojo.public_url).href,
    sourceOrig: {
      name: "Notion",
      data: new URL(pojo.public_url).href,
    },
  };
};

export const praseNotionURL = (url: string) => {
  const u = new URL(url);
  return {
    hash: u.hash,
    host: u.host,
    hostname: u.hostname,
    href: u.href,
    origin: u.origin,
    password: u.password,
    pathname: u.pathname,
    port: u.port,
    protocol: u.protocol,
    search: u.search,
    searchParams: Object.fromEntries(u.searchParams.entries()),
    username: u.username,
    workspace: u.pathname.split("/")[1],
    databaseId: u.pathname.split("/")[2],
    viewId: u.searchParams.get("v"),
  };
};

export function notionDataFromURL(notionInput: NotionInputUrl) {
  const dataFromURL = async () => {
    await loadENVs({ export: true });
    const notion = new Client({ auth: Deno.env.get("NOTION_SECRET") });

    const parts = praseNotionURL(notionInput.url);
    const resp = await notion.databases.query({
      database_id: parts.databaseId,
    });
    return resp.results.map(convertToAST);
  };

  return {
    to: destinations(dataFromURL()),
  };
}

export function notionDataFromDBid(notionInput: NotionInpuDBid) {
  const dataFromDbID = async () => {
    const _envs = await loadENVs({ export: true });
    const notion = new Client({ auth: Deno.env.get("NOTION_SECRET") });

    const resp = await notion.databases.query({
      database_id: notionInput.DBiD,
    });
    return resp.results.map(convertToAST);
  };

  return {
    to: destinations(dataFromDbID()),
  };
}

export function notionDataFromID(notionInput: NotionInputID) {
  const dataFromID = async () => {
    await loadENVs({ export: true });
    const notion = new Client({ auth: Deno.env.get("NOTION_SECRET") });
    return [
      convertToAST(
        await notion.pages.retrieve({ page_id: notionInput.id }),
      ),
    ];
  };

  return {
    to: destinations(dataFromID()),
  };
}

export function notionData(notionID: NotionInput) {
  if ("url" in notionID) {
    return notionDataFromURL(notionID);
  } else if ("DBiD" in notionID) {
    return notionDataFromDBid(notionID);
  } else {
    return notionDataFromID(notionID);
  }
}

export function notionDest(astData: Promise<ICalendarAST[]>) {
  return async (_notionCfg: unknown) => {
    const s = JSON.stringify(await astData);
    return {
      google: s,
      href: "",
    };
  };
}
