import type { Plugin } from "grapesjs";
import blocks from "./blocks";
import { IPluginOptions, IRequiredPluginOptions } from "./IPluginOptions";

const grapesjsPresetWebpagePluginModified: Plugin<IPluginOptions> = (
  editor,
  opts: Partial<IPluginOptions> = {},
) => {
  const config: IRequiredPluginOptions = {
    blocks: ["quote", "text-basic"],
    ...opts,
  };

  // Load blocks
  blocks(editor, config);
};

export default grapesjsPresetWebpagePluginModified;
