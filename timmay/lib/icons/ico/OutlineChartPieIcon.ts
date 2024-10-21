import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineChartPie icon from Heroicons 2
 * @module
 */
export function OutlineChartPieIcon(
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
        d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z",
      },
    }, {
      tag: "path",
      attr: {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z",
      },
      child: [],
    }],
  })(props);
}
export default OutlineChartPieIcon;
