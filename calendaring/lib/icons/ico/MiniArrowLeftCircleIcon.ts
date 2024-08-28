import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iniArrowLeftCircle icon from Heroicons 2
 * @module
 */
export function MiniArrowLeftCircleIcon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"g",attr:{"clipPath":"url(#a)"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z","clipRule":"evenodd"}}]},{tag:"defs",attr:{},child:[{tag:"clipPath",attr:{id:"a"},child:[{tag:"path",attr:{d:"M0 0h20v20H0z"},child:[]}]}]}]})(props);
}
export default MiniArrowLeftCircleIcon;
