import { assert, assertEquals } from "@std/assert/mod.ts";
import {
  notionData,
  notionDataFromDBid,
  notionDataFromURL,
  praseNotionURL,
} from "$lib/cal/notion.ts";

const url = "https://www.notion.so/kramerexpress/77c40fcec736444bbdd036897c03bf81?v=42363a90c62d40fe9768dae205d2eb1f&pvs=4";

Deno.test("Parse a Notion URL", () => {
  const notionParams = praseNotionURL(url);

  assertEquals(notionParams.workspace, "kramerexpress");
  assertEquals(notionParams.databaseId, "77c40fcec736444bbdd036897c03bf81");
  assertEquals(notionParams.viewId, "42363a90c62d40fe9768dae205d2eb1f");
  assertEquals(
    notionParams.searchParams["v"],
    "42363a90c62d40fe9768dae205d2eb1f",
  );
  assertEquals(notionParams.searchParams["pvs"], "4");
});

Deno.test({
    name: "Data from Notion Database IDs", 

    fn: async () => {
      const r = await notionDataFromDBid({ "DBiD": "77c40fcec736444bbdd036897c03bf81" })
        .to
        .ics({}).json()
        assert( Object.keys(r).length > 0, 'Return value should at least have properties' )

    }
});

Deno.test({
  name: "Data from Notion Database URL", 
  only: true,
  fn: async () => {
    const respDataArr = await notionDataFromURL({ url }).to._data
    for (const data of respDataArr) {
      // console.log(data)
      assert( Object.keys(data).length > 0, 'Return value should at least have properties' )
    }
  }
});

Deno.test("Notion Data Retrieval Function via URL", async () => {
  const d = await notionData({ url }).to._data
  console.log(d)
});

Deno.test("Notion Data Retrieval Function via ID", async () => {
  const d = await notionData({ id: "" }).to._data
  console.log(d)
});

Deno.test("Notion Data Retrieval Function via DBID", async () => {
  const d = await notionData({ DBiD: "" }).to._data
  console.log(d)
});
