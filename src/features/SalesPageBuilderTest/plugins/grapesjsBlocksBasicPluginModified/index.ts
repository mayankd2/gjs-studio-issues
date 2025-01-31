import type { Plugin } from "grapesjs";
import loadBlocks from "./blocks";

const grapesjsBlocksBasicPluginModified: Plugin = (editor) => {
  // grapes js studio already has this plugin
  // we just need to add our modifications on top of it
  loadBlocks(editor);
};

export default grapesjsBlocksBasicPluginModified;
