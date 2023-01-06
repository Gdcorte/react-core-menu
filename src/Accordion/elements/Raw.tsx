import { FunctionComponent, SyntheticEvent } from "react";
import { AccordionBaseProps } from "../interface";
import { Item } from "../styles";

interface AccordionRawProps extends AccordionBaseProps {
  parentLevel: number;
  menuName: string;
}

const Raw: FunctionComponent<AccordionRawProps> = ({
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
