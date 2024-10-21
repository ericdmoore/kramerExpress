import type { FreshContext } from "$fresh/server.ts";
//  https://deno.land/x/simple_ics@0.1.1

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
