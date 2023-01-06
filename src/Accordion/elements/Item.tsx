import { FunctionComponent } from "react";
import styles, { css } from "styled-components";
import { AccordionItemProps, AccordionMenuControlProps } from "../interface";
import { Container, List, Menu, Spacer, Title } from "../styles";
import { getAccordionMenuName } from "../utils";
import { default as AccordionRaw } from "./Raw";

interface AccordionContentProps
  extends AccordionItemProps,
    AccordionMenuControlProps {}

const StyledItemHover = css`
  :hover {
    background-color: ${({ theme: { background } }) => background.shade1};
    color: ${({ theme: { colors } }) => colors.primary.base};

    svg {
      fill: ${({ theme: { colors } }) => colors.primary.base};
    }
  }
`;

const StyledItems = styles.div`

    padding: 8px;
    border-radius: 5px;
    "cursor: pointer;"

    ${StyledItemHover}
`;

const AccordionContent: FunctionComponent<AccordionContentProps> = ({
  description,
  title,
  action,
  openMenu,
  menuName,
  changeOpenMenu,
  parentLevel,
}) => {
  const currentLevel = parentLevel + 1;

  function changeMenu() {
    changeOpenMenu(menuName);

    action && action();
  }

  return (
    <Container
      className={`accordion-item item lvl-${currentLevel} ${menuName}`}
    >
      <Menu
        onClick={changeMenu}
        className={`accordion-menu menu lvl-${currentLevel}`}
      >
        <Title>{title}</Title>
        <Spacer className="accordion-spacer spacer" />
      </Menu>
      {openMenu == menuName && (
        <List>
          <AccordionRaw
            title={description}
            parentLevel={currentLevel}
            action={action}
            menuName={getAccordionMenuName(currentLevel, 1)}
          />
        </List>
      )}
    </Container>
  );
};

export default AccordionContent;
