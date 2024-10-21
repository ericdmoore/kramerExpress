import { destinations, type ICalendarAST } from "./index.ts";
// import rrule from "@esm/rrule"

export function googleCalData(_googleCalCFG: unknown) {
  const data = [] as ICalendarAST[];
  return {
    to: destinations(Promise.resolve(data)),
  };
}

export function googleCalDest(astData: Promise<ICalendarAST[]>) {
  function formatedDate(date: Date, allDay: boolean = false) {
    const pad = (max: number, withStr: string) => (num: number) =>
      String(num).padStart(max, withStr);

    const year = date.getUTCFullYear();
    const month = pad(2, "0")(date.getUTCMonth() + 1); // Months are zero-indexed
    const day = pad(2, "0")(date.getUTCDate());
    const hours = pad(2, "0")(date.getUTCHours());
    const minutes = pad(2, "0")(date.getUTCMinutes());
    const seconds = pad(2, "0")(date.getUTCSeconds());

    return allDay
      ? `${year}${month}${day}`
      : `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
  }

  return async (googleCalCFG: unknown) => {
    const href = new URL("https://calendar.google.com/calendar/render");
    const ast = await astData;

    /**
     *     ### action
     *     - required: yes
     *     - format: string/eval
     *     - possible values: `TEMPLATE`
     *     - example: `action=TEMPLATE`
     *     - description: A default required parameter. (If you're using `https://calendar.google.com/calendar/r/eventedit`, this parameter is not required.)
     */
    const action = `TEMPLATE`;

    /**
     *     ### text
     *     - required: yes
     *     - format: text
     *     - example: `text=Birthday`
     *     - description: event title.
     */
    const title = ast[0].title;

    /**
     *     ### dates
     *     - required: yes
     *     - format: `YYYYMMDDTHHmmSSZ/YYYYMMDDTHHmmSSZ`
     *     - example: `dates=20201231T193000Z/20201231T223000Z`
     *     - description: gives the start and end dates and times (in Greenwich Mean Time) for the event. Dates must have both start and end time or it won't work. The start and end date can be the same (if appropriate). Special cases:
     *       - to use the user's timezone: `20201231T193000/20201231T223000` (don't specify a timezone);
     *       - to use UTC timezone, convert datetime to UTC, then use `Z` suffix: `20201231T193000Z/20201231T223000Z`;
     *       - for all-day events use `20201231/20210101`. You must use the following date as the end date for a one-day all-day event, or +1 day to whatever you want the end date to be.
     */
    const dates = `${formatedDate(ast[0].start, ast[0].isAllDay)}/${
      formatedDate(ast[0].end, ast[0].isAllDay)
    }`;

    /**
     *     ### ctz
     *     - required: no
     *     - format: [timezone name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     *     - example: `ctz=America/New_York`
     *     - description: custom timezone.
     *    const timezones = Intl.supportedValuesOf('timeZone');
     */
    const ctz = ``;

    /**
     *     ### details
     *     - required: no
     *     - format: text
     *     - example: `details=With clowns and stuff`
     *     - description: description of your event.
     */
    const details = ast[0].description;

    /**
     *     ### location
     *     - required: no
     *     - format: text
     *     - example: `location=North Pole`
     *     - description: set location of the event. Make sure it's an address Google Maps can read easily.
     */
    const location = ast[0].location;

    /**
     *     ### crm
     *     - required: no
     *     - possible values: `AVAILABLE`, `BUSY`, `BLOCKING`
     *     - format: string
     *     - example: `crm=AVAILABLE`
     *     - description: if Free, Busy, or Out of Office respectively.
     */
    const showFreeBusyOOO = ast[0].busy
      ? "BUSY"
      : "AVAILABLE" as "AVAILABLE" | "BUSY" | "BLOCKING";

    /**
     *     ### trp
     *     - required: no
     *     - possible values: `true`, `false`
     *     - format: string
     *     - example: `trp=false`
     *     - description: Show event as busy (true) or available (false). Stands for [RFC 5545 transparency](https://tools.ietf.org/html/rfc5545#section-3.8.2.7). It's ignored for all-day events, please refer to `crm` instead.
     */
    const isBusy = ast[0].busy;

    /**
     *     ### sprop
     *     - required: no
     *     - format: key-value
     *     - example: `sprop=website:www.santa.org&sprop=name:Sata-online`
     *     - description: identify the website or event source.
     */
    const sprop = "";
    // need a side car handler for each source type?
    // Object.entries(ast.sourceOrig.data)
    //   .forEach(([key, value]) =>
    //     href.searchParams.append('sprop',`${key}:${value}`)
    // )

    /**
     *     ### add
     *     - required: no
     *     - format: text (comma-separated emails)
     *     - example: `add=elf1@example.com,elf2@example.com`
     *     - description: a list of guests (comma-separated).
     */
    const add = ast[0].attendees.join(",");

    /**
     *     ### src
     *     - required: no
     *     - format: text (email)
     *     - example: `src=santa@example.com`
     *     - description: add an event to a shared calendar rather than a user's default.
     */
    const src = `${ast[0].sourceOrig.data}`;

    /**
     *     ### recur
     *     - required: no
     *     - format: text ([RFC-5545 specs](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html))
     *     - example: `recur=RRULE:FREQ=DAILY`
     *     - description: set recurring events.
     */
    // const recur = new rrule.RRule({byhour:5})
    // const rruleStart = ast.recurranceRule.starts
    // const rruleEnd = ast.recurranceRule.ends
    // let rruleFreq
    // if('repeatsEvery' in ast.recurranceRule){
    //   const {[freq]: interval } = ast.recurranceRule.repeatsEvery
    // }else{
    //   const dayOWeek = ast.recurranceRule.repeatsOn.first(offset) : dayOWeek
    // }

    href.searchParams.set("action", action);
    href.searchParams.set("text", title);
    href.searchParams.set("dates", dates);
    ctz && href.searchParams.set("ctz", ctz);
    details && href.searchParams.set("details", details);
    location && href.searchParams.set("location", location);
    showFreeBusyOOO && href.searchParams.set("crm", showFreeBusyOOO);
    isBusy && href.searchParams.set("trp", isBusy.toString());
    sprop && href.searchParams.set("sprop", sprop);
    add && href.searchParams.set("add", add);
    src && href.searchParams.set("src", src);
    // recur && href.searchParams.set('recur', recur);

    return {
      google: JSON.stringify({ googleCalCFG, ...(await astData) }),
      href: href.toString(),
    };
  };
}
