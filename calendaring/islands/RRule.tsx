// import type { Signal } from "@preact/signals";
import { datetime as _dt, RRule } from "@esm/rrule";
import type { Options as RRuleOpts } from "@esm/rrule";

enum RepeatOnDayList {
  Monday = "Monday",
  Tuesday = "Monday",
  Wednesday = "Monday",
  Thursday = "Monday",
  Friday = "Monday",
  Saturday = "Monday",
  Sunday = "Monday",
  Day = "Day",
  Weekday = "Weekday",
  "Weekend Day" = "Weekend Day",
}
interface RRulePropsEvery {
  starts: number; // epoch
  ends: { date: number } | { after: number } | "never";
  repeatsEvery:
    | { day: number }
    | { week: number }
    | { month: number }
    | { year: number };
}

interface RRulePropsOn {
  starts: number; // epoch
  ends: { date: number } | { after: number } | "never";
  repeatsOn:
    | { first: RepeatOnDayList }
    | { second: RepeatOnDayList }
    | { third: RepeatOnDayList }
    | { fourth: RepeatOnDayList }
    | { last: RepeatOnDayList };
}

export type RRuleProps = RRulePropsEvery | RRulePropsOn;

const propsToRRuleOpts = (props: RRuleProps): RRuleOpts => {
  const ret = { freq: 1, interval: 1 } as RRuleOpts;

  if ("repeatsEvery" in props) {
    const { starts, ends, repeatsEvery } = props;
    ret.dtstart = new Date(starts);

    if (ends !== "never" && "date" in ends) {
      ret.until = new Date(ends.date);
    } else if (ends !== "never" && "after" in ends) {
      ret.count = ends.after;
    } else {
      ret.until = null;
    }

    if ("day" in repeatsEvery) {
      ret.freq = RRule.DAILY;
      ret.interval = repeatsEvery.day;
    } else if ("week" in repeatsEvery) {
      ret.freq = RRule.WEEKLY;
      ret.interval = repeatsEvery.week;
    } else if ("month" in repeatsEvery) {
      ret.freq = RRule.MONTHLY;
      ret.interval = repeatsEvery.month;
    } else if ("year" in repeatsEvery) {
      ret.freq = RRule.YEARLY;
      ret.interval = repeatsEvery.year;
    }
  } else {
    const { starts, repeatsOn } = props;
    ret.dtstart = new Date(starts);
    if ("first" in repeatsOn) {
      ret.byweekday = [RRule.MO];
    } else if ("second" in repeatsOn) {
      ret.byweekday = [RRule.TU];
    } else if ("third" in repeatsOn) {
      ret.byweekday = [RRule.WE];
    } else if ("fourth" in repeatsOn) {
      ret.byweekday = [RRule.TH];
    } else if ("last" in repeatsOn) {
      ret.byweekday = [RRule.FR];
    }
  }
  return ret;
};

export default function RecurRule(props: RRuleProps) {
  const rr = new RRule(propsToRRuleOpts(props));

  return (
    <div>
      <p>{rr.toString()}</p>
    </div>
  );
}
