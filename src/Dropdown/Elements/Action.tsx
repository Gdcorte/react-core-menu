import { FunctionComponent, SyntheticEvent } from "react";
import { DropdownAction, DropdownBaseProps } from "../interface";
import { Option, SubContainer } from "../styles";

interface DropdownActionProps extends DropdownAction, DropdownBaseProps {}

const ElemOption: FunctionComponent<DropdownActionProps> = ({
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
