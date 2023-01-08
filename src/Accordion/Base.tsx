import {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { AccordionContent, AccordionRaw, SubAccordion } from "./elements";
import { AccordionOptions } from "./interface";
import { renderAccordionOptions } from "./utils";

export interface AccordionMenuProps extends HTMLAttributes<HTMLDivElement> {
  accordionOptions: AccordionOptions;
  className?: string;
  children: ReactNode;
}

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
`;

const AccordionMenu: FunctionComponent<AccordionMenuProps> = ({
  accordionOptions,
  className,
  ...props
}) => {
  const [openMenu, setopenMenu] = useState("");

  function changeOpenMenu(newMenu: string) {
    if (openMenu == newMenu) {
      setopenMenu("");
      return;
    }

    setopenMenu(newMenu);
  }

  const renderedOptions = useMemo(() => {
    return renderAccordionOptions({
      options: accordionOptions,
      openMenu,
      onMenuChange: changeOpenMenu,
      parentLevel: 0,
      SubAccordion,
      AccordionContent,
      AccordionRaw,
    });
  }, [openMenu]);

  return (
    <StyledMenuContainer
      className={`accordion-base root lvl-0 ${className || ""}`}
      {...props}
    >
      {renderedOptions}
    </StyledMenuContainer>
  );
};

export default AccordionMenu;
