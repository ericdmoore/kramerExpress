import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniMagnifyingGlassMinus icon from Heroicons 2
 * @module
 */
export function MiniMagnifyingGlassMinusIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: { d: "M6.75 8.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" },
    }, {
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M9 2a7 7 0 1 0 4.391 12.452l3.329 3.328a.75.75 0 1 0 1.06-1.06l-3.328-3.329A7 7 0 0 0 9 2ZM3.5 9a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z",
        "clipRule": "evenodd",
      },
      child: [],
    }],
  })(props);
}
export default MiniMagnifyingGlassMinusIcon;
