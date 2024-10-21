import { destinations, type ICalendarAST } from "./index.ts";

export function airtableData(_airtableCfg: unknown) {
  const fetchDataList = async () => {
    await 5;
    return [] as ICalendarAST[];
  };

  return {
    to: destinations(fetchDataList()),
  };
}

export function airtableDest(astData: Promise<ICalendarAST[]>) {
  return async (_airtableCfg: unknown) => {
    return { airtable: { data: (await astData) } };
  };
}
