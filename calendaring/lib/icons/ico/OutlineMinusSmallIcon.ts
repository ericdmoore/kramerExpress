import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineMinusSmall icon from Heroicons 2
 * @module
 */
export function OutlineMinusSmallIcon(
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
      attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 12H6" },
    }],
  })(props);
}
export default OutlineMinusSmallIcon;
