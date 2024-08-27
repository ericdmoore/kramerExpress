// import type { FreshContext } from "$fresh/server.ts";

export const handler = async (
  req: Request,
  // ctx: FreshContext,
): Promise<Response> => {
  return new Response(
    JSON.stringify(
      await {
        example: "",
        providers: {
          airtable: `${req.url}/from/airtable/`,
          notion: `${req.url}/from/notion/`,
          "*": `${req.url}/from/`,
        },
      },
    ),
    { status: 200, headers: { "content-type": "application/json" } },
  );
};
