import type { FreshContext } from "$fresh/server.ts";
import { datetime, RRule } from "npm:rrule";

enum BusyAvailBlocking {
  "BUSY" = "BUSY",
  "AVAILABLE" = "AVAILABLE",
  "BLOCKING" = "BLOCKING",
}

/**
 * Take in the airtable info,
 * retrieve data from airtable,
 * assuming the data is in/has the correct properties and formats,
 * then create a google calendar event link
 * @param req
 * @param ctx
 * @returns
 */
export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  // @see: https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md
  const parameters = {
    title: "", //string
    start: "", // epoch // Date(epoch) //
    end: "", // epoch // Date(epoch) // new Date(epoch).toISOString().replace(/\.[0-9][0-9][0-9]Z/g, 'Z').replace('-','').replace(':','')
    locaiton: "", //string
    description: "", //string
    public: BusyAvailBlocking.AVAILABLE,
    markAsBusy: false, //boolean
    properties: {}, // {[key:string]: string}
    recurringRule: "RRULE:FREQ=DAILY;COUNT=2", //string
    addToCal: "", //email
  };

  const _rr = new RRule({
    freq: RRule.WEEKLY,
    interval: 5,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: datetime(2012, 2, 1, 10, 30),
    until: datetime(2012, 12, 31),
  });

  const url = new URL("http://www.google.com/calendar/event");
  url.searchParams.append("action", "TEMPLATE");

  // DATES: description: gives the start and end dates and times (in Greenwich Mean Time) for the event.
  // Dates must have both start and end time or it won't work.
  // The start and end date can be the same (if appropriate).
  // Special cases:
  // to use the user's timezone: 20201231T193000/20201231T223000 (don't specify a timezone);
  // to use UTC timezone, convert datetime to UTC, then use Z suffix: 20201231T193000Z/20201231T223000Z;
  // for all-day events use 20201231/20210101. You must use the following date as the end date for a one day all day event, or +1 day to whatever you want the end date to be.
  url.searchParams.append("dates", "20211201T120000Z/20211201T140000Z"); // YYYYMMDDTHHmmSSZ/YYYYMMDDTHHmmSSZ

  // TEXT description: event title.
  url.searchParams.append("text", encodeURIComponent(parameters.title));

  // LOCATION: description: set location of the event. Make sure it's an address google maps can read easily.
  url.searchParams.append("location", encodeURIComponent(parameters.locaiton));

  // DETAILS: description: description of your event.
  url.searchParams.append(
    "details",
    encodeURIComponent(parameters.description),
  );

  // CRM : description: if Free, Busy, or Out of Office respectively.
  url.searchParams.append("crm", parameters.public);

  // TRP: description: Show event as busy (true) or available (false). Stands for RFC 5545 transparency. It's ignored for all day events, please refer to crm instead.
  url.searchParams.append("trp", encodeURIComponent(parameters.description));

  // SPROP: description: identify the website or event source
  url.searchParams.append("sprop", encodeURIComponent(parameters.description));

  // ADD: description: a list of guests (comma-separated).
  url.searchParams.append("add", encodeURIComponent(parameters.description)); // guest list

  // SRC: description: add an event to a shared calendar rather than a user's default.
  url.searchParams.append("src", encodeURIComponent(parameters.description)); // add to shared cal - inlieu of default

  // RECUR: description: set recurring events.
  url.searchParams.append("recur", parameters.recurringRule);

  return new Response(
    JSON.stringify(
      await {
        reqest: req,
        context: ctx,
        examples: [`${req.url}/AIRTABLE_ID`],
        parameters,
        googleLink: url.toString(),
      },
      null,
      2,
    ),
  );
};
