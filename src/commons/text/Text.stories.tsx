import { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./Text";

const meta = {
  title: "Typography/Text",
  component: Text,
} satisfies Meta<TextProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <Text>Hello, world!</Text>,
};
