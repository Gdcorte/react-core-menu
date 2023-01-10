import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SyntheticEvent } from "react";

import { default as DropdownMenu } from "./Base";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Dropdown",
  component: DropdownMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DropdownMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);

const test = (event: SyntheticEvent<HTMLDivElement>, dataName?: string) => {
  console.info(`oh my test ${dataName}`, event.currentTarget);
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Dropdown = Template.bind({});
Dropdown.args = {
  label: "Hi!, I'm a down menu",
  options: [
    { label: "option 1: link", href: "/" },
    {
      onClick: test,
      label: "option 2: action",
      dataName: "yippie-test",
      alignment: "right",
    },
    {
      label: "Sub Menu: RIGHT",
      menuName: "sub-menu-1",
      listOrientation: "Right",
      alignment: "right",
      options: [
        {
          label: "Sub Menu: UP",
          menuName: "sub-menu-2",
          listOrientation: "Up",
          options: [
            {
              label: "Sub Menu: LEFT",
              menuName: "sub-menu-3",
              listOrientation: "Left",
              options: [{ label: "option LEFT: link", href: "/" }],
            },
          ],
        },
      ],
    },
  ],
};
