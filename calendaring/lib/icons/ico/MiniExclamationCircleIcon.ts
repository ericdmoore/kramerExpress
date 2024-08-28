import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniExclamationCircle icon from Heroicons 2
 * @module
 */
export function MiniExclamationCircleIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
        "clipRule": "evenodd",
      },
    }],
  })(props);
}
export default MiniExclamationCircleIcon;
