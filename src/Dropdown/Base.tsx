import { CarretsThin } from "@gdcorte/react-core-icons";
import { FunctionComponent, useState } from "react";
import { DropdownAction, DropdownLink, SubDropdown } from "./Elements";
import { DropdownProps } from "./interface";
import { Carret, Container, List, Menu, Title } from "./styles";
import { renderDropdownOptions } from "./utils";

export const Dropdown: FunctionComponent<DropdownProps> = ({
  className,
  menuName,
  currentPageMenu,
  label,
  options,
  listOrientation,
  ...props
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

  const dropdownOptions = renderDropdownOptions({
    options,
    onOptionClick: setClosed,
    SubDropdown,
    DropdownAction,
    DropdownLink,
  });

  return (
    <Container
      onMouseEnter={setOpen}
      onMouseLeave={setClosed}
      className={`root dropdown-container ${className} ${menuName}`}
      {...props}
    >
      <Menu
        onClick={toggleOpen}
        selected={currentPageMenu ? currentPageMenu == menuName : false}
        className={`dropdown-menu ${menuName}`}
      >
        <Title className={`dropdown-title`}>{label}</Title>
        <Carret className={`dropdown-caret ${menuName}`}>
          <CarretNode />
        </Carret>
      </Menu>
      {isOpen && (
        <List
          className={`dropdown-list ${menuName}`}
          listDirection={listDirection}
        >
          {dropdownOptions}
        </List>
      )}
    </Container>
  );
};

Dropdown.defaultProps = {
  listOrientation: "Down",
};

export default Dropdown;
