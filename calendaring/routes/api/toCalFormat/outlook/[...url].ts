import type { FreshContext, RouteConfig } from "$fresh/server.ts";

import * as _Notion from "notionSDK";

export const config: RouteConfig = {
  routeOverride: "/api/outlook/:urlpath*",
};

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  await _req;
  return new Response("");
};
