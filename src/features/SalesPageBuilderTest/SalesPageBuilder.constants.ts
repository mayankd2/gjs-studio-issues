import { CreateEditorOptions } from "@grapesjs/studio-sdk";

export const gjs_studio_ctn_ele_id = "gjs-sale";

export const grapes_js_static_init_config = {
  // keep only desktop and mobile designs
  deviceManager: {
    default: "desktop",
    devices: [
      // Order matters here. Defines the order of creating the css files in the editor preview.
      { id: "desktop", name: "Desktop", width: "" },
      {
        id: "mobile",
        name: "Mobile",
        width: "320px",
        widthMedia: "768px",
      },
    ],
  },
};

export const grapes_js_studio_static_init_config: Partial<CreateEditorOptions> &
  Pick<CreateEditorOptions, "licenseKey"> = {
  root: `#${gjs_studio_ctn_ele_id}`,
  licenseKey: import.meta.env.VITE_APP_GJS_STUDIO_LICENSE_KEY,
  theme: "dark",
  storage: { type: "self" }, // disable saving pages to local storage
  pages: false, // disable multiple pages
};

export const grapes_js_typed_plugin_config = {
  // config ref - https://github.com/GrapesJS/website/blob/47a6d75c0cc91035286e2a6641c19835198fd176/src/app/(demos)/demo/utils.ts
  block: {
    category: "Extra",
    content: {
      type: "typed",
      "type-speed": 40,
      strings: ["Text row one", "Text row two", "Text row three"],
    },
  },
};
