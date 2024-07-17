import { Meta, StoryObj } from "@storybook/react";
import Tag, { TagProps } from "./Tag";

const meta = {
  title: "Data Display/Tag",
  component: Tag,
} satisfies Meta<TagProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Ini tag",
  },
};
