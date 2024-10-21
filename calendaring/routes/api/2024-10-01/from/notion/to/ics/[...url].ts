import type { FreshContext } from "$fresh/server.ts";
import paginate from "$lib/notionHelp/paginate.ts";
import notionUrlParse from "$lib/notionHelp/urlParse.ts";
import { Client } from "@notionhq/client";
import { load } from "@std/dotenv/mod.ts";
import get from "@esm/lodash-es/get";

import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "https://esm.sh/v135/@notionhq/client@2.2.15/build/src/api-endpoints.d.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  await load({ export: true }).catch((e) => {
    console.error("Error loading .env file:");
    console.error("not an issue in prod -since the ENV is set via the cloud");
    console.error(e);
  });

  const { url } = ctx.params;
  const auth = Deno.env.get("NOTION_SECRET") ?? "<>MISSING<>";
  console.log(0, "auth:", auth?.slice(0, 3));

  const notion = new Client({ auth });

  console.log("url:", url);
  const u = new URL(url);
  console.log("url:", u);

  let i = 0;
  const acc = [] as Array<
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  >;
  for await (
    const res of paginate(notion, notionUrlParse(u).fromNotion.db_ID)
  ) {
    acc.concat(res);
    console.log(i, "res:", res);
    console.log(get(res, `results[${i}].properties`));
    i++;
  }

  return new Response(
    JSON.stringify(
      {
        params: ctx.params,
        reqest: req.method,
        context: { ...ctx },
      },
      null,
      2,
    ),
    { headers: { "content-type": "application/json" } },
  );
};
