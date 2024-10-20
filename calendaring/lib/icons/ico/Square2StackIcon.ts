import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * quare2Stack icon from Heroicons 2
 * @module
 */
export function Square2StackIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: {
        d: "M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z",
      },
    }, {
      tag: "path",
      attr: {
        d: "M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z",
      },
      child: [],
    }],
  })(props);
}
export default Square2StackIcon;
