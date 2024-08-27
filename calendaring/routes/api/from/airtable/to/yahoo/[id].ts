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
        examples: [
          `${req.url}/AIRTABLE_ID`,
        ],
      },
      null,
      2,
    ),
  );
};
