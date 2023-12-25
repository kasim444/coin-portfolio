import { ConfirmModal } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/molecules/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isOpen: true,
    onClose: action("onClose"),
    onConfirm: action("onConfirm"),
  },
};
