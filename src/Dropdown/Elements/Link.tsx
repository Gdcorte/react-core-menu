import { FunctionComponent } from "react";
import { DropdownBaseProps, DropdownLink } from "../interface";
import { Link, Option, SubContainer } from "../styles";

interface LinkOptionProps extends DropdownLink, DropdownBaseProps {}

const ElemOption: FunctionComponent<LinkOptionProps> = ({
  label,
  href,
  alignment,
  onOptionClick,
}) => {
  return (
    <Link className={`dropdown-link`} href={href} onClick={onOptionClick}>
      <SubContainer className={`dropdown-subcontainer`}>
        <Option className={`dropdown-option`} alignment={alignment}>
          {label}
        </Option>
      </SubContainer>
    </Link>
  );
};

ElemOption.defaultProps = {};

export default ElemOption;
