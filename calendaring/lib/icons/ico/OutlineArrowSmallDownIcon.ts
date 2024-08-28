import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineArrowSmallDown icon from Heroicons 2
 * @module
 */
export function OutlineArrowSmallDownIcon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"}}]})(props);
}
export default OutlineArrowSmallDownIcon;
