import { Client } from "@notionhq/client";

async function* paginate(
  client: Client,
  DB_ID: string,
  opts: { cursor: string | undefined | null; page_size: number } = {
    cursor: undefined,
    page_size: 100,
  },
) {
  let resp = await client.databases.query({
    database_id: DB_ID,
    start_cursor: opts.cursor ?? undefined,
  });
  console.log("paginate1:", resp);

  yield resp.results;

  while (resp.has_more) {
    // reset response
    resp = await client.databases.query({
      database_id: DB_ID,
      page_size: opts.page_size,
      start_cursor: opts.cursor ?? undefined,
    });

    // move cursor
    opts.cursor = resp.next_cursor;

    // send it & repeat
    yield resp.results;
  }
}

export default paginate;
