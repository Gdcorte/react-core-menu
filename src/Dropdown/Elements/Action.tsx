import { SyntheticEvent } from "react";
import { DropdownActionComponent } from "../interface";
import { Option, SubContainer } from "../styles";

const ElemOption: DropdownActionComponent = ({
  label,
  dataName,
  alignment,
  onClick,
  onOptionClick,
}) => {
  function clickAction(event: SyntheticEvent<HTMLDivElement>) {
    onOptionClick();

    onClick(event, dataName);
  }

  return (
    <SubContainer className={`dropdown-subcontainer`} onClick={clickAction}>
      <Option className={`dropdown-option`} alignment={alignment}>
        {label}
      </Option>
    </SubContainer>
  );
};

ElemOption.defaultProps = {};

export default ElemOption;
