import { HTMLAttributes, ReactNode, SyntheticEvent } from "react";

export type DropdownBase = {
  label: ReactNode;
};

type Alignments =
  | "center"
  | "left"
  | "right"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type DropdownOptionBase = {
  alignment?: Alignments;
};

export interface DropdownAction extends DropdownBase, DropdownOptionBase {
  onClick: (event: SyntheticEvent<HTMLDivElement>, dataName?: string) => void;
  dataName?: string;
}

export interface DropdownLink extends DropdownBase, DropdownOptionBase {
  href: string;
}

export type DropdownOption = DropdownAction | DropdownLink | DropdownMenu;

export type DropdownListOrientation = "Up" | "Down" | "Left" | "Right";

export type DropdownMenu = {
  menuName: string;
  options: DropdownOption[];
  listOrientation?: DropdownListOrientation;
} & DropdownBase;

export type SubDropdown = DropdownMenu;

export type DropdownBaseMenuProps = {
  currentPageMenu?: string;
} & DropdownMenu;

export type DropdownBaseProps = {
  onOptionClick: () => void;
};

export type DropdownProps = { className?: string } & DropdownBaseMenuProps &
  HTMLAttributes<HTMLDivElement>;

export function isDropdownLink(option: DropdownOption): option is DropdownLink {
  return (option as DropdownLink).href !== undefined;
}
export function isDropdownAction(
  option: DropdownOption
): option is DropdownAction {
  return (option as DropdownAction).onClick !== undefined;
}

export function isSubDropdown(option: DropdownOption): option is SubDropdown {
  return (option as SubDropdown).menuName !== undefined;
}
