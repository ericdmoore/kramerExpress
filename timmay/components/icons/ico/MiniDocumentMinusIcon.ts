import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniDocumentMinus icon from Heroicons 2
 * @module
 */
export function MiniDocumentMinusIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm7.75 9.75a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5h4.5Z",
        "clipRule": "evenodd",
      },
    }],
  })(props);
}
export default MiniDocumentMinusIcon;
