import type { Editor, Plugin } from "grapesjs";
// import commands from "./commands";
import { IPluginOptions } from "./IPluginOptions";
// import { ct_actions } from "../../SalesPageBuilder.constants";
import { loadMaterialIcons } from "../grapesjsGoogleMaterialIconsPluginModified/utils";

const saveNLoadPlugin: Plugin<Partial<IPluginOptions>> = (
  editor,
  opts = {},
) => {
  const htmlString = opts.htmlString;
  const projectData = opts.projectData;

  editor.on("load", (ed: Editor) => {
    if (projectData) {
      ed.loadProjectData(projectData);
    } else if (htmlString) {
      ed.Css.clear();
      ed.setComponents(htmlString);
    } else {
      ed.Components.clear();
    }

    // clear undo redo stack
    ed.UndoManager.clear();
  });

  loadMaterialIcons(editor);
};

export default saveNLoadPlugin;
