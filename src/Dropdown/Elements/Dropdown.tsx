import { CarretsThin } from "@gdcorte/react-core-icons";
import { FunctionComponent, HTMLAttributes, useState } from "react";
import { DropdownBaseProps, DropdownMenu } from "../interface";
import { Carret, List, SubContainer, SubMenu, Title } from "../styles";
import { renderDropdownOptions } from "../utils";

interface ElementContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    DropdownMenu,
    DropdownBaseProps {}

const ElemContainer: FunctionComponent<ElementContainerProps> = ({
  menuName,
  label,
  options,
  onOptionClick,
  listOrientation,
}) => {
  const [isOpen, setisOpen] = useState(false);
  const listDirection = listOrientation || "Down";
  const CarretNode = CarretsThin[listDirection];

  function toggleOpen() {
    setisOpen(!isOpen);
  }

  function setClosed(): void {
    setisOpen(false);
  }

  function setOpen() {
    setisOpen(true);
  }
  const body = renderDropdownOptions({
    options,
    onOptionClick,
  });

  return (
    <SubContainer
      className={`dropdown-subcontainer ${menuName}`}
      onMouseEnter={setOpen}
      onMouseLeave={setClosed}
    >
      <SubMenu
        onClick={toggleOpen}
        selected={isOpen}
        className={`dropdown-submenu ${menuName}`}
      >
        <Title className={`dropdown-title ${menuName}`}>{label}</Title>
        <Carret className={`dropdown-caret ${menuName}`}>
          <CarretNode />
        </Carret>
      </SubMenu>
      {isOpen && (
        <List
          className={`dropdown-list ${menuName}`}
          listDirection={listDirection}
        >
          {body}
        </List>
      )}
    </SubContainer>
  );
};

export default ElemContainer;
