import { destinations, type ICalendarAST } from "./index.ts";

export function outlookData(_outlookCfg: unknown) {
  const dataList = Promise.resolve({} as ICalendarAST[]);
  return {
    to: destinations(dataList),
  };
}

export function outlookDest(astData: Promise<ICalendarAST[]>) {
  return async (_outlookCfg: unknown) => {
    return {
      outlook: { data: await astData },
    };
  };
}
