import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToolsSingleGear as SettingsIcon } from "@gdcorte/react-core-icons";
import styled from "styled-components";
import { default as AccordionMenu } from "./Base";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Accordion",
  component: AccordionMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AccordionMenu>;

// Custom style
const StyledTestContainer = styled.div`
  .accordion-title,
  .accordion-raw {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .body-lv1 {
    background-color: ${({ theme: { background } }) => background.shade1};
  }

  .body-lv2 {
    background-color: ${({ theme: { background } }) => background.shade2};
  }
`;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccordionMenu> = (args) => (
  <StyledTestContainer>
    <AccordionMenu {...args} />
  </StyledTestContainer>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Accordion = Template.bind({});
Accordion.args = {
  accordionOptions: [
    {
      title: <SettingsIcon />,
      action: () => {
        console.log("Accord me! Menu 1 Op1");
      },
    },
    {
      title: "Menu 1 Op2",
      description: <div>"lorem Ipsum"</div>,
      action: () => {
        console.log("Accord me! Menu 1 Op2");
      },
    },
    {
      title: "Menu 1 Op3",
      content: [
        {
          title: "Menu 2 Op1",
          description: <div>"lorem Ipsum"</div>,
          action: () => {
            console.log("Accord me! Menu 1 Op1");
          },
        },
        {
          title: "Menu 2 Op2",
          description: <div>"lorem Ipsum"</div>,
          action: () => {
            console.log("Accord me! Menu 1 Op2");
          },
        },
        {
          title: "Menu 2 Op3",
          description: <div>"lorem Ipsum"</div>,
          action: () => {
            console.log("Accord me! Menu 1 Op3");
          },
        },
        {
          title: "Menu 2 Op4",
          description: <div>"lorem Ipsum"</div>,
          action: () => {
            console.log("Accord me! Menu 1 Op4");
          },
        },
      ],
      action: () => {
        console.log("Accord me! Menu 1 Op3");
      },
    },
    {
      title: <SettingsIcon />,
      content: [
        {
          title: "Menu 3 Op1",
          description: <div>"lorem Ipsum"</div>,
          action: () => {
            console.log("Accord me! Menu 1 Op1");
          },
        },
        {
          title: "Menu 3 Op2",
          description: <div>"lorem Ipsum"</div>,
          action: () => {
            console.log("Accord me! Menu 1 Op2");
          },
        },
        {
          title: "Menu 3 Op3",
          description: <div>"lorem Ipsum"</div>,
          action: () => {
            console.log("Accord me! Menu 1 Op3");
          },
        },
        {
          title: <SettingsIcon />,
          content: [
            {
              title: "Menu 4 Op1",
              action: () => {
                console.log("Accord me! Menu 1 Op1");
              },
            },
            {
              title: "Menu 4 Op2",
              action: () => {
                console.log("Accord me! Menu 1 Op2");
              },
            },
            {
              title: "Menu 4 Op3",
              description: <div>"lorem Ipsum"</div>,
              action: () => {
                console.log("Accord me! Menu 1 Op3");
              },
            },
            {
              title: "Menu 4 Op4",
              description: <div>"lorem Ipsum"</div>,
              action: () => {
                console.log("Accord me! Menu 1 Op4");
              },
            },
          ],
          action: () => {
            console.log("Accord me! Menu 1 Op4");
          },
        },
      ],
      action: () => {
        console.log("Accord me! Menu 1 Op4");
      },
    },
  ],
};
