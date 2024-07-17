import { Meta, StoryObj } from "@storybook/react";
import Divider, { DividerProps } from "./Divider";

const meta = {
  title: "Basic Components/Divider",
  component: Divider,
  argTypes: {
    orientation: { control: "select", options: ["left", "center", "right"] },
  },
} satisfies Meta<DividerProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Divider />,
};

export const DividerWithText: Story = {
  render: (args) => <Divider {...args}>Hello, Divider!</Divider>,
};
