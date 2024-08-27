import type { FreshContext } from "$fresh/server.ts";

import * as _Notion from "notionSDK";

export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  return new Response(
    JSON.stringify(
      await {
        examples: [
          `${req.url}/https://www.notion.so/kramerexpress/77c40fcec736444bbdd036897c03bf81?v=42363a90c62d40fe9768dae205d2eb1f&pvs=4`,
        ],
        providers: {
          airtable: `${req.url}/airtable/:urlpathOrID*/`,
          notion: `${req.url}/notion/:urlpathOrID*/`,
          "*": `${req.url}/:urlpath*/`,
        },
      },
      null,
      2,
    ),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
