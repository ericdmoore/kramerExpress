import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineChevronUpDown icon from Heroicons 2
 * @module
 */
export function OutlineChevronUpDownIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [{
      tag: "path",
      attr: {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9",
      },
    }],
  })(props);
}
export default OutlineChevronUpDownIcon;
