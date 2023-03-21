import { FunctionComponent, SyntheticEvent } from "react";
import styled, { useTheme } from "styled-components";
import { Dropdown, DropdownOption } from "../Dropdown";

const StyledColorBlock = styled.div<{
  color: string;
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const StyledContainer = styled.div`
  .dropdown-options {
    justify-content: center;
  }
`;

export interface ColorSwitcherProps {
  newColorCallback: (newColor: string) => void;
}

const ColorSwitcher: FunctionComponent<ColorSwitcherProps> = ({
  newColorCallback,
}) => {
  function changeToNewColor(
    _: SyntheticEvent<HTMLDivElement>,
    dataName?: string
  ) {
    dataName && newColorCallback(dataName);
    return;
  }

  const {
    presets,
    colorName,
    colors: {
      primary: { base },
    },
  } = useTheme();

  const colors = Object.entries(presets)
    .filter(([_, colorValue]) => colorValue != base)
    .map(([presetName, presetValue]) => {
      let colorOption: DropdownOption = {
        label: <StyledColorBlock color={presetValue} />,
        onClick: changeToNewColor,
        dataName: presetName,
        alignment: "center",
      };

      return colorOption;
    });

  return (
    <StyledContainer className={`theme-color-picker color-picker-${colorName}`}>
      <Dropdown
        label={<StyledColorBlock color={base} />}
        options={colors}
        menuName={colorName}
      />
    </StyledContainer>
  );
};

export default ColorSwitcher;
