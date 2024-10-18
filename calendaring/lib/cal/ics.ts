import { destinations, type ICalendarAST, zCalendar } from "./index.ts";
// import ical, {ICalCalendarMethod} from "npm:ical-generator";
// import rrule from "@esm/rrule"

export function icsData(input: { href: string }) {
  const dataP = fetch(input.href)
    .then((res) => res.text())
    .then((text) => iCalParse(text))
    .catch((err) => {
      throw new Error(err);
    }) as Promise<ICalendarAST[]>;

  return {
    to: destinations(dataP),
  };
}

export const iCalParse = (input: string): ICalendarAST[] => {
  return [zCalendar.parse(JSON.parse(input))];
};

export function icsDest(data: Promise<ICalendarAST[]>) {
  const text = async () => {
    console.log({ data });
    return JSON.stringify(await data);
  };

  return (_icsCfg: unknown) => ({
    text,
    href: () => Promise.resolve(""),
    blob: async () => new Blob([await text()]),
    json: async ()=>{ return await {} }
  });
}
