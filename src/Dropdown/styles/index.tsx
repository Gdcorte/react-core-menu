import { findBestContrast } from "@gdcorte/react-core-theme";
import styled, { css } from "styled-components";
import { DropdownListOrientation } from "../interface";

export const BaseContainerCss = css`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  color: ${({ theme: { background, fonts } }) =>
    findBestContrast(background.base, fonts)};
`;

export const SubContainer = styled.div`
  ${BaseContainerCss}
  width: 100%;
`;

export const Container = styled.div`
  ${BaseContainerCss}
  width: fit-content;
`;

const HoverBehavior = css`
  :hover {
    background-color: ${({ theme: { background } }) => background.shade1};
    color: ${({ theme: { colors } }) => colors.primary.base};
    text-decoration-style: dotted;
    text-decoration-line: underline;
    text-underline-offset: 4px;

    svg {
      fill: ${({ theme: { colors } }) => colors.primary.base};
    }
  }
`;

const selectedBehavior = css<{
  selected?: boolean;
}>`
  ${({ selected, theme: { colors } }) =>
    selected &&
    `
        color: ${colors.primary.shade1};

        svg {
            fill: ${colors.primary.shade1};
        }
    `}
`;

export const MenuCss = css<{
  selected?: boolean;
}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px;

  ${HoverBehavior};
  ${selectedBehavior};
`;

export const Menu = styled.div<{
  selected?: boolean;
}>`
  ${MenuCss}

  :hover {
    background-color: transparent;
  }
`;

export const SubMenu = styled.div<{
  selected?: boolean;
}>`
  ${MenuCss}
`;

export const Title = styled.div``;

export const Carret = styled.div`
  display: flex;
  width: 10px;
  height: 10px;
  margin-left: 6px;
  fill: ${({ theme: { background, fonts } }) =>
    findBestContrast(background.base, fonts)};
`;

const ListDirectionCss = css<{ listDirection: DropdownListOrientation }>`
  ${({ listDirection }) => {
    switch (listDirection) {
      case "Up":
        return `
          bottom: 100%;
          display: flex;
          flex-direction: column-reverse;
        `;
      case "Down":
        return "top: 100%;";
      case "Left":
        return "right: 100%;";
      case "Right":
        return "left: 100%;";
      default:
        const _exhaustiveCheck: never = listDirection;
        throw new Error(
          `undefined dropdown list direction ${_exhaustiveCheck}`
        );
    }
  }}
`;

export const List = styled.div<{ listDirection: DropdownListOrientation }>`
  position: absolute;
  max-width: min-content;
  min-width: -webkit-fill-available;
  background-color: ${({ theme: { background } }) => background.base};
  color: ${({ theme: { background, fonts } }) =>
    findBestContrast(background.base, fonts)};
  padding: 6px 0px;
  border-radius: 5px;
  border: 1px solid ${({ theme: { background } }) => background.shade1};
  z-index: 10000;

  ${ListDirectionCss}
`;

export const Option = styled.div<{
  alignment?: string;
}>`
  padding: 4px;
  display: flex;
  justify-content: ${({ alignment }) => alignment};

  ${HoverBehavior};
`;

export const Link = styled.a`
  text-decoration: none;
`;
