import { DropdownLinkComponent } from "../interface";
import { Link, Option, SubContainer } from "../styles";

const ElemOption: DropdownLinkComponent = ({
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
