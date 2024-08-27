import type { FreshContext } from "$fresh/server.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  return new Response(
    JSON.stringify(
      await {
        reqest: req,
        context: ctx,
        providers: {
          airtable: `${req.url}/airtable/:urlpathOrID*/`,
          notion: `${req.url}/notion/:urlpathOrID*/`,
          "*": `${req.url}/:urlpath*/`,
        },
      },
      null,
      2,
    ),
  );
};
