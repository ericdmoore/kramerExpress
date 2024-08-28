import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * utlinePower icon from Heroicons 2
 * @module
 */
export function OutlinePowerIcon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"}}]})(props);
}
export default OutlinePowerIcon;
