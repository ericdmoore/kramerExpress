import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniDocumentMagnifyingGlass icon from Heroicons 2
 * @module
 */
export function MiniDocumentMagnifyingGlassIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: { d: "M8 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" },
    }, {
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm5 5a3 3 0 1 0 1.524 5.585l1.196 1.195a.75.75 0 1 0 1.06-1.06l-1.195-1.196A3 3 0 0 0 9.5 7Z",
        "clipRule": "evenodd",
      },
      child: [],
    }],
  })(props);
}
export default MiniDocumentMagnifyingGlassIcon;
