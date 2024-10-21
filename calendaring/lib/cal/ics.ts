import { destinations, type ICalendarAST, zCalendar } from "./index.ts";
import * as ical from "npm:ical-generator";
// import ical from "npm:ical-generator";
// import rrule from "@esm/rrule"

export const iCalParse = (input: string): ICalendarAST[] => {
  return [zCalendar.parse(JSON.parse(input))];
};


export function icsData(input: { href: string }) {
  
  const parseIcsUrl = async () => {
    const _resp = await fetch(input.href)
    return [] as ICalendarAST[];
  }

  return {
    to: destinations(parseIcsUrl()),
  };
}


const convertFromAST = (ast: ICalendarAST) => {
  return {
    start: ast.start,
    end: ast.end,
    summary: ast.title,
    description: ast.description,
    location: ast.location,
    allDay: ast.isAllDay,
    busyStatus: ast.busy ? "BUSY" : "FREE",
    status: ast.visibility === "public" ? "CONFIRMED" : "TENTATIVE",
    organizer: typeof ast.organizer === 'string' 
      ? { name: ast.organizer }
      : ast.organizer,
    url: ast.url,
    id: ast.sourceOrig.data,
  } as ical.ICalEventData
}

export function icsDest(events: Promise<ICalendarAST[]>) {
  
  const text = async () => {
    const calendar = ical.default({name:'Default'}); 
    (await events).forEach((e: ICalendarAST)=>{
      //adds to calendar var
      calendar.createEvent(convertFromAST(e))
    })
    return calendar.toString()
  };

  return (_icsCfg: unknown) => ({
    text,
    href: () => Promise.resolve( new URL(import.meta.url).href ),
    blob: async () => new Blob([await text()]),
    json: async ()=>{ return (await events) }
  });
}

