import { AccordionContent, AccordionRaw, SubAccordion } from "../elements";
import {
  AccordionOptions,
  isAccordionItem,
  isAccordionRaw,
  isSubAccordion,
} from "../interface";

type RenderAccordion = {
  options: AccordionOptions;
  openMenu: string;
  onMenuChange: CallableFunction;
  parentLevel: number;
};

export function getAccordionMenuName(parentLevel: number, optionLevel: number) {
  return `menu-${parentLevel}-op-${optionLevel}`;
}

export function renderAccordionOptions({
  options,
  openMenu,
  onMenuChange,
  parentLevel,
}: RenderAccordion) {
  let counter = 0;
  return options.map((value) => {
    counter += 1;
    let menuName = getAccordionMenuName(parentLevel, counter);

    if (isAccordionItem(value)) {
      return (
        <AccordionContent
          key={`item-${Math.random().toFixed(10)}`}
          changeOpenMenu={onMenuChange}
          menuName={menuName}
          openMenu={openMenu}
          description={value.description}
          action={value.action}
          title={value.title}
          parentLevel={parentLevel}
        />
      );
    }

    if (isSubAccordion(value)) {
      return (
        <SubAccordion
          key={`sub-${Math.random().toFixed(10)}`}
          content={value.content}
          action={value.action}
          title={value.title}
          menuName={menuName}
          openMenu={openMenu}
          changeOpenMenu={onMenuChange}
          parentLevel={parentLevel}
        />
      );
    }

    if (isAccordionRaw(value)) {
      return (
        <AccordionRaw
          key={`item-${Math.random().toFixed(10)}`}
          action={value.action}
          title={value.title}
          parentLevel={parentLevel}
          menuName={menuName}
        />
      );
    }

    throw new Error(`Could not render accordion, unknown type with props.`);
  });
}
