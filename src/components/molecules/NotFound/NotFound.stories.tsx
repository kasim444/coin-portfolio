import { Meta } from "@storybook/react";
import { NotFound } from ".";

export default {
  title: "components/molecules/NotFound",
  component: NotFound,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  args: {},
};

export const WithCustomTitle = {
  args: {
    title: "Not Found",
    description: "",
  },
};
