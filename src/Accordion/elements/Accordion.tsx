import { CarretDownThin } from "@gdcorte/react-core-icons";
import { FunctionComponent, useMemo, useState } from "react";
import { AccordionMenuControlProps, SubAccordionProps } from "../interface";
import { Carret, Container, List, Menu, Title } from "../styles";
import { renderAccordionOptions } from "../utils";

export interface AccordionProps
  extends SubAccordionProps,
    AccordionMenuControlProps {}

const Accordion: FunctionComponent<AccordionProps> = ({
  menuName,
  content,
  action,
  title,
  openMenu,
  changeOpenMenu,
  parentLevel,
}) => {
  const [openSubMenu, setopenSubMenu] = useState("");
  const currentLevel = parentLevel + 1;

  function changeMenu() {
    changeOpenMenu(menuName);

    action && action();
  }

  function changeOpenSubMenu(newMenu: string) {
    if (openSubMenu == newMenu) {
      setopenSubMenu("");
      return;
    }

    setopenSubMenu(newMenu);
  }

  const renderedOptions = useMemo(() => {
    return renderAccordionOptions({
      options: content,
      openMenu: openSubMenu,
      onMenuChange: changeOpenSubMenu,
      parentLevel: currentLevel,
    });
  }, [openSubMenu]);

  return (
    <Container
      className={`accordion-container container lvl-${currentLevel} ${menuName}`}
    >
      <Menu
        onClick={changeMenu}
        className={`accordion-menu menu lvl-${currentLevel}`}
      >
        <Title className="accordion-title title">{title}</Title>
        <Carret className="accordion-caret caret">
          <CarretDownThin />
        </Carret>
      </Menu>
      {openMenu == menuName && (
        <List className={`accordion-item item lvl-${currentLevel}`}>
          {renderedOptions}
        </List>
      )}
    </Container>
  );
};

export default Accordion;
