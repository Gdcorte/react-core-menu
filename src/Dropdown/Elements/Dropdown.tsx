import { CarretsThin } from "@gdcorte/react-core-icons";
import { useState } from "react";
import { SubDropdownComponent } from "../interface";
import { Carret, List, SubContainer, SubMenu, Title } from "../styles";
import { renderDropdownOptions } from "../utils/render";
import { default as DropdownAction } from "./Action";
import { default as DropdownLink } from "./Link";

const SubDropdown: SubDropdownComponent = ({
  menuName,
  label,
  options,
  onOptionClick,
  listOrientation,
  alignment,
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
    SubDropdown,
    DropdownAction,
    DropdownLink,
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
        alignment={alignment}
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

export default SubDropdown;
