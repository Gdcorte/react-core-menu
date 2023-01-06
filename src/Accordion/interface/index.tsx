import { ReactNode } from "react";

export interface AccordionMenuControlProps {
  menuName: string;
  openMenu: string;
  changeOpenMenu: CallableFunction;
  parentLevel: number;
}

export interface AccordionBaseProps {
  title: ReactNode;
  action?: CallableFunction;
}

export interface AccordionItemProps extends AccordionBaseProps {
  description: ReactNode;
}

export interface SubAccordionProps extends AccordionBaseProps {
  content: AccordionOptions;
}

export type SubAccordionOptions =
  | SubAccordionProps
  | AccordionItemProps
  | AccordionBaseProps;
export type AccordionOptions = SubAccordionOptions[];

export function isSubAccordion(
  option: SubAccordionOptions
): option is SubAccordionProps {
  return (option as SubAccordionProps).content !== undefined;
}

export function isAccordionItem(
  option: SubAccordionOptions
): option is AccordionItemProps {
  return (option as AccordionItemProps).description !== undefined;
}

export function isAccordionRaw(
  option: SubAccordionOptions
): option is AccordionBaseProps {
  return (
    (option as AccordionItemProps).description === undefined &&
    (option as SubAccordionProps).content === undefined
  );
}
