import { Editor } from "grapesjs";
import { IPluginOptions } from "./interfaces";

const loadBlocks = (editor: Editor, config: IPluginOptions) => {
  const bm = editor.BlockManager;
  const accordionsBlock = config.accordionsBlock;
  const style = config.style;
  const type = "accordions";
  const content = `<div data-gjs-type="${type}" style="display: flex; flex-direction: column; gap: 10px;"></div>
    ${style ? `<style>${style}</style>` : ""}`;

  accordionsBlock &&
    bm.add(type, {
      category: "Extra",
      label: "Accordions Menu",
      media: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 0v3h17v-3h-17zM16 2h-15v-1h15v1zM0 13h17v-9h-17v9zM1 5h15v7h-15v-7zM0 17h17v-3h-17v3zM1 15h15v1h-15v-1z"></path></svg>`,
      content,
      ...accordionsBlock,
    });
};

export default loadBlocks;
