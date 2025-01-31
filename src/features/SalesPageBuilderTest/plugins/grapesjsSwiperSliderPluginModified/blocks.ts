import { Editor } from "grapesjs";
import { containerName } from "./constants";
import { IPluginOptions } from "./interfaces";

const loadBlocks = (editor: Editor, config: IPluginOptions) => {
  const bm = editor.BlockManager;
  const sliderBlock = config.sliderBlock;

  sliderBlock &&
    bm.add(containerName, {
      category: "Extra",
      label: "Swiper Slider",
      media: `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/>
        </svg>`,
      content: { type: containerName },
      ...sliderBlock,
    });
};

export default loadBlocks;
