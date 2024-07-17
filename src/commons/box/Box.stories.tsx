import { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";
import Flex from "./Flex";
import Grid from "./Grid";

const meta = {
  title: "Basic Components/Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Box>Hello box</Box>,
};

export const Flexbox: Story = {
  render: () => (
    <Flex gap="8px" justify="center" p="34px">
      <Box>Ini box dalam flex</Box>
      <Box>Ini box dalam flex</Box>
      <Box>Ini box dalam flex</Box>
      <Box>Ini box dalam flex</Box>
    </Flex>
  ),
};

export const GridBox: Story = {
  render: () => (
    <Grid column="repeat(3, 1fr)" gap="12px">
      <Box>Ini box dalam grid</Box>
      <Box>Ini box dalam grid</Box>
      <Box>Ini box dalam grid</Box>
      <Box>Ini box dalam grid</Box>
    </Grid>
  ),
};
