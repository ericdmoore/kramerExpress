import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineArrowSmallRight icon from Heroicons 2
 * @module
 */
export function OutlineArrowSmallRightIcon(
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
        d: "M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75",
      },
    }],
  })(props);
}
export default OutlineArrowSmallRightIcon;
