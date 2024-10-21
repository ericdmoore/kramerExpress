import { destinations, type ICalendarAST } from "./index.ts";

export function yahooData(_astData: unknown) {
  const dataList = Promise.resolve({} as ICalendarAST[]);
  return {
    to: destinations(dataList),
  };
}

export function yahooDest(astData: Promise<ICalendarAST[]>) {
  return async (_yahooCfg: unknown) => {
    return {
      yahoo: { data: await astData },
    };
  };
}
