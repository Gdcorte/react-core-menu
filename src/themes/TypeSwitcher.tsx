import { FunctionComponent } from "react";
import { useTheme } from "styled-components";

import { HouseBulbsDark, HouseBulbsLight } from "@gdcorte/react-core-icons";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;

  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  width: 24px;
  height: 24px;

  :hover {
    background-color: ${({ theme: { background } }) => background.shade4};
  }

  .icon-house-bulb-dark {
    fill: #b7b7b7;
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
    let newType = typeName == "light" ? "dark" : "light";

    typeChangeCallback(newType);
  }
  const TypeIcon = typeName == "light" ? HouseBulbsLight : HouseBulbsDark;

  return (
    <StyledContainer
      onClick={changeType}
      className={`theme-type-switcher type-switcher-${typeName}`}
    >
      <TypeIcon />
    </StyledContainer>
  );
};

export default ThemeSwitcher;
