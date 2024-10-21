import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineArrowUturnRight icon from Heroicons 2
 * @module
 */
export function OutlineArrowUturnRightIcon(
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
        d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3",
      },
    }],
  })(props);
}
export default OutlineArrowUturnRightIcon;
