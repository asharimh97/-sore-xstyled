import { Meta, StoryObj } from "@storybook/react";
import Alert, { AlertProps } from "./Alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  argTypes: {
    description: { control: "text" },
  },
} satisfies Meta<AlertProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Ini alert",
  },
};
