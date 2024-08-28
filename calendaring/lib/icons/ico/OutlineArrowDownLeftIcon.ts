import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlineArrowDownLeft icon from Heroicons 2
 * @module
 */
export function OutlineArrowDownLeftIcon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"}}]})(props);
}
export default OutlineArrowDownLeftIcon;
