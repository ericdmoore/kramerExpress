import type { FreshContext, RouteConfig } from "$fresh/server.ts";

import * as _Notion from "notionSDK";

export const config: RouteConfig = {
  routeOverride: "/api/google/from/notion/:urlpath*",
};

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  return new Response(
    JSON.stringify(await { req, ctx }),
  );
};
