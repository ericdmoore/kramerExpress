import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineArrowLongRight icon from Heroicons 2
 * @module
 */
export function OutlineArrowLongRightIcon(
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
        d: "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3",
      },
    }],
  })(props);
}
export default OutlineArrowLongRightIcon;
