import { CarretsThin } from "@gdcorte/react-core-icons";
import { FunctionComponent, useRef, useState } from "react";
import { OutsideClickHandler } from "../hooks";
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
  alignment,
  disableHover,
  ...props
}) => {
  const [isOpen, setisOpen] = useState(false);
  const listDirection = listOrientation || "Down";
  const CarretNode = CarretsThin[listDirection];
  const conatinerRef = useRef(null);

  OutsideClickHandler(conatinerRef, outsideClickHandler);

  function toggleOpen() {
    setisOpen(!isOpen);
  }

  function setClosed(): void {
    !disableHover && setisOpen(false);
  }

  function closeOnClick(): void {
    setisOpen(false);
  }

  function outsideClickHandler() {
    disableHover && closeOnClick();
  }

  function setOpen() {
    !disableHover && setisOpen(true);
  }

  const dropdownOptions = renderDropdownOptions({
    options,
    onOptionClick: closeOnClick,
    SubDropdown,
    DropdownAction,
    DropdownLink,
  });

  return (
    <Container
      ref={conatinerRef}
      onMouseEnter={setOpen}
      onMouseLeave={setClosed}
      className={`root dropdown-container ${className} ${menuName}`}
      {...props}
    >
      <Menu
        onClick={toggleOpen}
        selected={currentPageMenu ? currentPageMenu == menuName : false}
        className={`dropdown-menu ${menuName}`}
        alignment={alignment}
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
