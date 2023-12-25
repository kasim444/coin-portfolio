import { Meta } from "@storybook/react";
import { ActionButtonGroups } from "@/components/molecules/ActionButtonGroups";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default {
  title: "components/molecules/ActionButtonGroups",
  component: ActionButtonGroups,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta;

export const Default = {
  args: {},
};
