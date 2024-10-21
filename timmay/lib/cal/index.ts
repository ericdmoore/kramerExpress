import { airtableData, airtableDest } from "./airtable.ts";
import { yahooData, yahooDest } from "./yahoo.ts";
import { office365Data, office365Dest } from "./office365.ts";
import { outlookData, outlookDest } from "./outlook.ts";
import { googleCalData, googleCalDest } from "./googleCal.ts";
import { icsData, icsDest } from "./ics.ts";
import { notionData, notionDest } from "$lib/cal/notion.ts";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const zRepeatDayList = z.enum([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Day",
  "Weekday",
  "Weekend Day",
]);

const zEndsDate = z.union([
  z.object({ date: z.number() }),
  z.object({ after: z.number() }),
]);

export const zCalendar = z.object({
  title: z.string(),
  description: z.string(),
  location: z.string(),
  isAllDay: z.boolean(),
  start: z.date(),
  end: z.date(),
  attendees: z.array(z.string()),
  organizer: z.union([
    z.string(),
    z.object({
      name: z.string(),
      email: z.optional(z.string()),
      mailto: z.optional(z.string()),
      sentBy: z.optional(z.string()),
    }),
  ]),
  visibility: z.enum(["public", "private"]),
  busy: z.boolean(),
  sourceOrig: z.object({
    name: z.string(),
    data: z.string(),
  }),
  alarms: z.array(z.object({
    trigger: z.date(),
    description: z.string(),
  })),
  url: z.optional(z.string()),
  recurranceRule: z.optional(z.union([
    // repeat every
    z.object({
      starts: z.number(), //epoch
      ends: zEndsDate,
      repeatsEvery: z.union([
        z.object({ day: z.number() }),
        z.object({ week: z.number() }),
        z.object({ month: z.number() }),
        z.object({ year: z.number() }),
      ]),
    }),
    // repeat on
    z.object({
      starts: z.number(),
      ends: zEndsDate,
      repeatsOn: z.union([
        z.object({ first: zRepeatDayList }),
        z.object({ second: zRepeatDayList }),
        z.object({ third: zRepeatDayList }),
        z.object({ fourth: zRepeatDayList }),
        z.object({ last: zRepeatDayList }),
      ]),
    }),
  ])),
});

export type ICalendarAST = typeof zCalendar._type;

export function destinations(data: Promise<ICalendarAST[]>) {
  return {
    _data: data,
    ics: icsDest(data),
    notion: notionDest(data),
    airtable: airtableDest(data),
    yahoo: yahooDest(data),
    outlook: outlookDest(data),
    office365: office365Dest(data),
    googleCal: googleCalDest(data),
  };
}

/**
 * @param config
 *
 * ```js
 * // Examples
 * const yahooLink = await calendaring().from.airtable({ table: 'string' }).to.yahoo()
 * const office365Link = await calendaring().from.airtable({ table: 'string' }).to.office365()
 * const googleLink = await calendaring().from.web({ table: 'string' }).to.googleCal()
 * const outlookLink = await calendaring().from.notion({ id: 'string' }).to.outlook()
 * const icsFileText = await calendaring().from.notion({ url: 'string' }).to.ical.text()
 * const icsFileish = await calendaring().from.notion({ id: 'string' }).to.ical.blob()
 * ```
 */
export const calendaring = (_globalCfg: unknown) => {
  // JSON.stringify(globalCfg);

  const sources = {
    airtable: airtableData,
    yahoo: yahooData,
    outlook: outlookData,
    office365: office365Data,
    googleCal: googleCalData,
    notion: notionData,
    ical: icsData,
  };

  return {
    from: sources,
  };
};

export default calendaring;
