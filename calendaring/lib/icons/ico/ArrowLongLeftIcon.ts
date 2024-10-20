import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * rrowLongLeft icon from Heroicons 2
 * @module
 */
export function ArrowLongLeftIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z",
        "clipRule": "evenodd",
      },
    }],
  })(props);
}
export default ArrowLongLeftIcon;
