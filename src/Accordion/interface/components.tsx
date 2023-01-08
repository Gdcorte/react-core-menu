import { FunctionComponent } from "react";
import {
  AccordionBaseProps,
  AccordionItemProps,
  AccordionMenuControlProps,
  SubAccordionProps,
} from "./properties";

interface AccordionProps extends SubAccordionProps, AccordionMenuControlProps {}

export type SubAccordionComponent = FunctionComponent<AccordionProps>;

interface AccordionContentProps
  extends AccordionItemProps,
    AccordionMenuControlProps {}

export type AccordionItemComponent = FunctionComponent<AccordionContentProps>;

interface AccordionRawProps extends AccordionBaseProps {
  parentLevel: number;
  menuName: string;
}

export type AccordionRawComponent = FunctionComponent<AccordionRawProps>;
