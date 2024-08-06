import { Meta, StoryObj } from "@storybook/react";
import Card, { CardProps } from "./Card";
import BlogCard from "./BlogCard";
import { Grid } from "@/commons/box";

const meta = {
  title: "Component/Card",
  component: Card,
  argTypes: {
    p: { control: "text" },
    boxShadow: { control: "text" },
    borderRadius: { control: "text" },
    border: { control: "text" },
    borderColor: { control: "color" },
  },
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Card {...args}>Hello, card!</Card>,
};

export const Blog: Story = {
  render: () => (
    <Grid column="repeat(3, 1fr)" gap="16px">
      <BlogCard
        date="5 Agustus 2020"
        title="Menuju Padang Rumput"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <BlogCard
        date="5 Agustus 2020"
        title="Menuju Padang Rumput"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <BlogCard
        date="5 Agustus 2020"
        title="Menuju Padang Rumput"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </Grid>
  ),
};
