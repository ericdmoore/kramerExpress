import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineChevronDoubleUp icon from Heroicons 2
 * @module
 */
export function OutlineChevronDoubleUpIcon(
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
        d: "m4.5 18.75 7.5-7.5 7.5 7.5",
      },
    }, {
      tag: "path",
      attr: {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.5 12.75 7.5-7.5 7.5 7.5",
      },
      child: [],
    }],
  })(props);
}
export default OutlineChevronDoubleUpIcon;
