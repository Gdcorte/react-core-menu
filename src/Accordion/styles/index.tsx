import { findBestContrast } from "@gdcorte/react-core-theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  color: ${({ theme: { background, fonts } }) =>
    findBestContrast(background.base, fonts)};

  svg {
    fill: ${({ theme: { background, fonts } }) =>
      findBestContrast(background.base, fonts)};
  }
`;

export const Menu = styled.div`
  padding: 6px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: ${({ theme: { background } }) => background.shade1};
    color: ${({ theme: { colors } }) => colors.primary.base};

    svg {
      fill: ${({ theme: { colors } }) => colors.primary.base};
    }
  }
`;

export const Title = styled.div`
  display: flex;
`;

const CarretCss = css`
  display: flex;
  margin-left: 4px;
  width: 10px;
  height: 10px;
`;

export const Carret = styled.div`
  svg {
    ${CarretCss}
  }
`;

export const Spacer = styled.div`
  ${CarretCss}
`;

export const List = styled.div`
  border-radius: 10px;
  padding-left: 10px;
`;

const StyledItemHover = css`
  :hover {
    background-color: ${({ theme: { background } }) => background.shade1};
    color: ${({ theme: { colors } }) => colors.primary.base};

    svg {
      fill: ${({ theme: { colors } }) => colors.primary.base};
    }
  }
`;

export const Item = styled.div<{
  hasAction: boolean;
}>`
  display: flex;
  justify-content: center;

  padding: 6px;
  border-radius: 5px;
  ${({ hasAction }) => hasAction && "cursor: pointer;"};

  ${({ hasAction }) => hasAction && StyledItemHover}
`;
