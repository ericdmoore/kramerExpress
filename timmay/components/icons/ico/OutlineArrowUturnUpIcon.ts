import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineArrowUturnUp icon from Heroicons 2
 * @module
 */
export function OutlineArrowUturnUpIcon(
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
        d: "m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3",
      },
    }],
  })(props);
}
export default OutlineArrowUturnUpIcon;
