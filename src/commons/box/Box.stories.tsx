import { Meta, StoryObj } from "@storybook/react";
import Box from ".";

const meta = {
  title: "Basic Components/Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Box>Hello box</Box>,
};
