import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineMinus icon from Heroicons 2
 * @module
 */
export function OutlineMinusIcon(
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
      attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" },
    }],
  })(props);
}
export default OutlineMinusIcon;
