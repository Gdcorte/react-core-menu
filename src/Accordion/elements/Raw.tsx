import { SyntheticEvent } from "react";
import { AccordionRawComponent } from "../interface";
import { Item } from "../styles";

const Raw: AccordionRawComponent = ({
  title,
  action,
  menuName,
  parentLevel,
}) => {
  function accordionItemAction(event: SyntheticEvent) {
    action && action(event);
  }

  return (
    <Item
      className={`accordion-raw raw lvl-${parentLevel} ${menuName}`}
      hasAction={Boolean(action)}
      onClick={accordionItemAction}
    >
      {title}
    </Item>
  );
};

export default Raw;
