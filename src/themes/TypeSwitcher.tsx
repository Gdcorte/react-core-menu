import { FunctionComponent } from "react";
import { useTheme } from "styled-components";

import { HouseBulbsDark, HouseBulbsLight } from "@gdcorte/react-core-icons";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;

  > div {
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    height: 24px;
    width: 24px;

    > svg {
      height: inherit;
      width: inherit;
    }
    :hover {
      background-color: ${({ theme: { background } }) => background.shade4};
    }
  }
`;

export interface ThemeSwitcherProps {
  typeChangeCallback: CallableFunction;
}

const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({
  typeChangeCallback,
}) => {
  const { typeName } = useTheme();

  function changeType() {
    let newType = typeName == "Light" ? "Dark" : "Light";

    typeChangeCallback(newType);
  }
  const TypeIcon = typeName == "Light" ? HouseBulbsLight : HouseBulbsDark;

  return (
    <StyledContainer
      onClick={changeType}
      className={`theme-type-switcher-${typeName}`}
    >
      <div>
        <TypeIcon />
      </div>
    </StyledContainer>
  );
};

export default ThemeSwitcher;
