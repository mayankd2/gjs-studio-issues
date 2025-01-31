import { CommandButtonItem, CustomItems } from "@grapesjs/studio-sdk";
import { StudioButtonSize } from "@grapesjs/studio-sdk/dist/components/public/StudioButton.js";

export const getTopbarRightButtons: CustomItems<CommandButtonItem> = ({
  items,
}) => {
  const newItems = [...items];

  newItems.push({
    id: "update-theme",
    size: "s" as StudioButtonSize,
    title: "Update Theme",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm248 184V72c101.7 0 184 82.3 184 184 0 101.7-82.3 184-184 184z"/></svg>`,
    onClick: ({ editor }) => {
      editor.Commands.isActive("open-update-theme")
        ? editor.stopCommand("open-update-theme")
        : editor.runCommand("open-update-theme");
    },
  });

  return newItems;
};
