import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniBoltSlash icon from Heroicons 2
 * @module
 */
export function MiniBoltSlashIcon(
  props: IconBaseProps,
): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [{
      tag: "path",
      attr: {
        fillRule: "evenodd",
        d: "M2.22 2.22a.75.75 0 0 1 1.06 0l14.5 14.5a.75.75 0 1 1-1.06 1.06L2.22 3.28a.75.75 0 0 1 0-1.06Z",
        "clipRule": "evenodd",
      },
    }, {
      tag: "path",
      attr: {
        d: "M4.73 7.912 2.191 10.75A.75.75 0 0 0 2.75 12h6.068L4.73 7.912ZM9.233 12.415l-1.216 5.678a.75.75 0 0 0 1.292.657l2.956-3.303-3.032-3.032ZM15.27 12.088l2.539-2.838A.75.75 0 0 0 17.25 8h-6.068l4.088 4.088ZM10.767 7.585l1.216-5.678a.75.75 0 0 0-1.292-.657L7.735 4.553l3.032 3.032Z",
      },
      child: [],
    }],
  })(props);
}
export default MiniBoltSlashIcon;