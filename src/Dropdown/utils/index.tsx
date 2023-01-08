import { DropdownAction, DropdownLink, SubDropdown } from "../Elements";
import {
  DropdownOption,
  isDropdownAction,
  isDropdownLink,
  isSubDropdown,
} from "../interface";

type RenderDropdownOptionsProps = {
  options: DropdownOption[];
  onOptionClick: () => void;
};

export function renderDropdownOptions({
  options,
  onOptionClick,
}: RenderDropdownOptionsProps) {
  const optionsNode = options.map((option) => {
    if (isDropdownAction(option)) {
      return (
        <DropdownAction
          alignment={option.alignment}
          key={`dropdown-key-${Math.random().toFixed(10)}`}
          label={option.label}
          onClick={option.onClick}
          dataName={option.dataName}
          onOptionClick={onOptionClick}
        />
      );
    }

    if (isDropdownLink(option)) {
      return (
        <DropdownLink
          alignment={option.alignment}
          key={`dropdown-key-${Math.random().toFixed(10)}`}
          label={option.label}
          href={option.href}
          onOptionClick={onOptionClick}
        />
      );
    }

    if (isSubDropdown(option)) {
      return (
        <SubDropdown
          key={`dropdown-key-${Math.random().toFixed(10)}`}
          menuName={option.menuName}
          listOrientation={option.listOrientation}
          label={option.label}
          options={option.options}
          onOptionClick={onOptionClick}
        />
      );
    }

    throw new Error("Undefined dropdown element type");
  });

  return optionsNode;
}
