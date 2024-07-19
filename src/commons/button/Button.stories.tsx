import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./BaseButton";
import Button from "./Button";

const meta = {
  title: "General/Button",
  component: Button,
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Ini button",
  },
};
