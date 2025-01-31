import type { Editor, BlockProperties } from "grapesjs";
import { IRequiredPluginOptions } from "./IPluginOptions";

export default (editor: Editor, config: IRequiredPluginOptions) => {
  const addBlock = (id: string, def: BlockProperties) => {
    config.blocks.indexOf(id)! >= 0 &&
      editor.Blocks.add(id, {
        select: true,
        category: "Basic",
        ...def,
      });
  };

  addBlock("quote", {
    label: "Quote",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,
    content: `<blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`,
  });

  addBlock("text-basic", {
    label: "Text section",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </svg>`,
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`,
  });
};
