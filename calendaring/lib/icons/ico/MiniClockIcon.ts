import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniClock icon from Heroicons 2
 * @module
 */
export function MiniClockIcon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z",
        "clipRule": "evenodd",
      },
    }],
  })(props);
}
export default MiniClockIcon;
