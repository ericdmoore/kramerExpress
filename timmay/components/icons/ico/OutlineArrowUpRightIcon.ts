import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineArrowUpRight icon from Heroicons 2
 * @module
 */
export function OutlineArrowUpRightIcon(
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
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25",
      },
    }],
  })(props);
}
export default OutlineArrowUpRightIcon;
