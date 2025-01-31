import { CommandButtonItem, CustomItems } from "@grapesjs/studio-sdk";

export const getTopbarRightButtons: CustomItems<CommandButtonItem> = ({
  items,
}) =>
  items.map((i) => {
    switch (i.id) {
      case "clearCanvas": // override default clear canvas function
        return {
          ...i,
          onClick: ({ editor }) => {
            if (!confirm("Are you sure you want to clear the canvas?")) {
              return;
            }
            editor.runCommand("core:canvas-clear");
          },
        };

      default:
        return i;
    }
  });
