import { assert, assertEquals } from "@std/assert/mod.ts";
import {
  notionData,
  notionDataFromDBid,
  notionDataFromURL,
  praseNotionURL,
} from "$lib/cal/notion.ts";
import { ICalendarAST } from "$lib/cal/index.ts";

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

const assertASTproperties = (ast: ICalendarAST) => {
  assert(ast.title, "AST should have a title");
  assert(ast.start, "AST should have a start date");
  assert(ast.end, "AST should have an end date");
  assert('busy' in ast, "AST should have a busy flag");
  assert('isAllDay' in ast, "AST should have an isAllDay flag");
  assert(['private', ''].includes(ast.visibility), "AST should have a visibility flag");
  assert(ast.sourceOrig.data, "AST should have a sourceOrig.data");
  assert(ast.sourceOrig.name, "AST should have a sourceOrig.name");
}


Deno.test({
    name: "Data from Notion Database IDs", 
    fn: async () => {
      const r = await notionDataFromDBid({ DBiD: "77c40fcec736444bbdd036897c03bf81" })
        .to._data
        r.forEach((data) => {
          assertASTproperties(data)
        })
    }
});

Deno.test({
  name: "Data from Notion Database URL", 
  fn: async () => {
    const eventList = await notionDataFromURL({ url }).to._data
    eventList.forEach((event)=> {
      assertASTproperties(event)
    })
  }
});

Deno.test({
  name: "Notion Data Retrieval Function via URL", 
  fn: async () => {
    const list = await notionData({ url }).to._data
    list.forEach((event) => {
      assertASTproperties(event)
    })
  }
});

Deno.test({
  name: "Notion Data Retrieval Function via ID", 
  // https://www.notion.so/kramerexpress/PTA-Spirit-Night-ShakeShack-882526666b3a4e358d5021aa1d936a03?pvs=4
  fn: async () => {
    const eventList = await notionData({ id: "882526666b3a4e358d5021aa1d936a03" }).to._data
    eventList.forEach((event) => { 
      assertASTproperties(event)
    })
  }
});

Deno.test({
  name: "Notion Data Retrieval Function via DBID", 
  fn: async () => {
    const events = await notionData({ DBiD: "77c40fcec736444bbdd036897c03bf81" }).to._data
    events.forEach((event) => {
      assertASTproperties(event)
    })
  }
});

Deno.test({
  name: "Notion Data ICS Text Conversion",
  fn: async () => {
    const icsText = await notionData({ url }).to.ics({}).text()
    
    assert(icsText, "ICS text should available")
    assert(icsText.includes("BEGIN:VCALENDAR"), "ICS text should start with BEGIN:VCALENDAR")
  }
})

Deno.test({
  name:'Varied Data Structures should be functionally equivalent',
  fn: async () => {
    const notionCalData = await notionData({ url })

    const ics = await notionCalData.to.ics({}).json()
    const raw = await notionCalData.to._data
    
    let i = 0;
    for (const icsEvent of ics) {
      const rawEvent = raw[i]
      assert(icsEvent.start === rawEvent.start, "Start date should match")
      assert(icsEvent.end === rawEvent.end, "End date should match")
      assert(icsEvent.title === rawEvent.title, "Title should match")
      assert(icsEvent.description === rawEvent.description, "Description should match")
      assert(icsEvent.location === rawEvent.location, "Location should match")
      assert(icsEvent.isAllDay === rawEvent.isAllDay, "AllDay should match")
      assert(icsEvent.busy === rawEvent.busy, "Busy status should match")
      assert(icsEvent.visibility === rawEvent.visibility, "Visibility should match")
      assert(icsEvent.organizer === rawEvent.organizer, "Organizer should match")
      assert(icsEvent.url === rawEvent.url, "URL should match")
      i++
    }
    assert(ics)
  }
})

Deno.test({
  name:'template',
  ignore: true,
  fn: async () => {}
})