import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniMinusCircle icon from Heroicons 2
 * @module
 */
export function MiniMinusCircleIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z",
        "clipRule": "evenodd",
      },
    }],
  })(props);
}
export default MiniMinusCircleIcon;
