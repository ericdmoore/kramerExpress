import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineMagnifyingGlassCircle icon from Heroicons 2
 * @module
 */
export function OutlineMagnifyingGlassCircleIcon(
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
        d: "m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      },
    }],
  })(props);
}
export default OutlineMagnifyingGlassCircleIcon;
