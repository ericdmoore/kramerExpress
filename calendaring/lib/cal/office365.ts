import { destinations, type ICalendarAST } from "./index.ts";

export function office365Data(_office365: unknown) {
  const dataList = Promise.resolve({} as ICalendarAST[]);
  return {
    to: destinations(dataList),
  };
}

export function office365Dest(astData: Promise<ICalendarAST[]>) {
  return async (_office365: unknown) => {
    return {
      href: JSON.stringify(await astData),
      office365: { data: "" },
    };
  };
}
