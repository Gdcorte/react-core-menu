import { DropdownCustomLinkComponent } from "../interface/components";
import { Option, SubContainer } from "../styles";

const ElemOption: DropdownCustomLinkComponent = ({
  label,
  href,
  Link,
  linkProps,
  alignment,
  onOptionClick,
}) => {
  return (
    <Link
      className={`dropdown-link`}
      href={href}
      {...linkProps}
      onClick={onOptionClick}
    >
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
