import {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from "react";

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

export interface DropdownCustomLink extends DropdownLink {
  customLink: FunctionComponent;
  linkProps: any;
}

export type DropdownOption =
  | DropdownAction
  | DropdownLink
  | DropdownCustomLink
  | DropdownMenu;

export type DropdownListOrientation = "Up" | "Down" | "Left" | "Right";

export type DropdownMenu = {
  menuName: string;
  options: DropdownOption[];
  listOrientation?: DropdownListOrientation;
  disableHover?: boolean;
} & DropdownBase &
  DropdownOptionBase;

export type SubDropdown = DropdownMenu;

export type DropdownBaseMenuProps = {
  currentPageMenu?: string;
} & DropdownMenu;

export type DropdownBaseProps = {
  onOptionClick: () => void;
  disableHover?: boolean;
};

export type DropdownProps = {
  className?: string;
  disableHover?: boolean;
} & DropdownBaseMenuProps &
  HTMLAttributes<HTMLDivElement>;

export function isDropdownLink(option: DropdownOption): option is DropdownLink {
  return (option as DropdownLink).href !== undefined;
}

export function isDropdownCustomLink(
  option: DropdownOption
): option is DropdownCustomLink {
  return (option as DropdownCustomLink).customLink !== undefined;
}

export function isDropdownAction(
  option: DropdownOption
): option is DropdownAction {
  return (option as DropdownAction).onClick !== undefined;
}

export function isSubDropdown(option: DropdownOption): option is SubDropdown {
  return (option as SubDropdown).menuName !== undefined;
}
