import type { FreshContext } from "$fresh/server.ts";

// import { Notion } from "notionSDK";
import { load } from "@std/dotenv/mod.ts";
import { Client } from "@notionhq/client";

// export const config: RouteConfig = {
//   routeOverride: "/api/ics/from/notion/:urlpath*",
// };

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const { url } = _ctx.params;
  if (!URL.canParse(url)) {
    return new Response(`Can not parse URL : ${url}`, { status: 400 });
  } else {
    const u = new URL(url);
    console.log({ u });
    await load({ export: true });
    const notion_token = Deno.env.get("NOTION_SECRET") ?? "> MISSING < ";

    const notion = new Client({
      auth: notion_token,
    });

    const nameChunks = u.pathname.split("/");
    const lastChunk = nameChunks.slice(-1)[0];
    console.log({ lastChunk });

    // Dads Club still needs proper link   /DBid                            viewID
    // https://www.notion.so/kramerexpress/1058c51c1b4c4bae85ffac6ec29a81b8?v=b69508197e5b48ecb18a647f0e62ff02&pvs=4
    //
    // General Calendar                 /DBid                             viewID
    // https://kramerexpress.notion.site/77c40fcec736444bbdd036897c03bf81?v=42363a90c62d40fe9768dae205d2eb1f&pvs=4
    // lastChunk = "1058c51c1b4c4bae85ffac6ec29a81b8";
    // lastChunk = "4254fc65cb574d248b390ce7e6f91f1a"
    // console.log("page = ", u);
    //
    //
    // const page = await notion.pages.retrieve({ page_id: "ae8e10f6621b4745bb54b3de9dc1b247" })
    // .catch(console.error);
    // console.log({ page });

    const db = await notion.databases.retrieve({ database_id: lastChunk });
    let resp = await notion.databases.query({ database_id: lastChunk });

    while (resp.has_more) {
      console.log({ resp });

      // reset response
      resp = await notion.databases.query({
        database_id: lastChunk,
        start_cursor: resp.next_cursor || undefined, // string | null VS string | undefined
      });
    }

    //
    // AIRTABLE
    //
    // const airtableResp = await fetch("https://api.notion.com/v1/users/me", {
    //   headers: {
    // "Notion-Version": "2022-06-28",
    // "Authorization": `Bearer ${notion_token}`,
    //   },
    // });
    //
    // const airtableData = await airtableResp.json();
    // console.log("airtable User Data: ", airtableData);
    //
    // console.log('DB: ', await notion.getDatabaseById(lastChunk))
    // console.log('Page: ', await notion.getPageById(lastChunk));
    // console.log('Children: ', await notion.getPageChildrenById(lastChunk))
    // console.log({db, page, pageKids});

    return new Response(JSON.stringify({ db }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
};
