import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineNoSymbol icon from Heroicons 2
 * @module
 */
export function OutlineNoSymbolIcon(
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
        d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636",
      },
    }],
  })(props);
}
export default OutlineNoSymbolIcon;
