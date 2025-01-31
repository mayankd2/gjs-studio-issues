import { ProjectData } from "grapesjs";

export type IPluginOptions = {
  /**
   * projectData returned by editor.getProjectData() api of grapesjs
   */
  projectData?: ProjectData;

  /**
   * html string. Used in case project data does not exist
   */
  htmlString?: string;
};
