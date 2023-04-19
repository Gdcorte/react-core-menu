import { FunctionComponent, HTMLAttributes } from "react";
import {
  DropdownAction,
  DropdownBaseProps,
  DropdownLink,
  DropdownMenu,
} from "./properties";

interface SubDropdownProps
  extends HTMLAttributes<HTMLDivElement>,
    DropdownMenu,
    DropdownBaseProps {}

export type SubDropdownComponent = FunctionComponent<SubDropdownProps>;

interface DropdownActionProps extends DropdownAction, DropdownBaseProps {}

export type DropdownActionComponent = FunctionComponent<DropdownActionProps>;

interface LinkOptionProps extends DropdownLink, DropdownBaseProps {}
export type DropdownLinkComponent = FunctionComponent<LinkOptionProps>;

type CustomLinkOptionProps = LinkOptionProps & {
  Link: FunctionComponent;
  linkProps: any;
};
export type DropdownCustomLinkComponent =
  FunctionComponent<CustomLinkOptionProps>;
