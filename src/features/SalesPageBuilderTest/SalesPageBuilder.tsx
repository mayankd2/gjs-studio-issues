import "@grapesjs/studio-sdk/style";
import "./SalesPageBuilder.css";
// grapesjs-undraw
import "grapesjs-undraw/dist/grapesjs-undraw.min.css";
import { useEffect, useRef, useState } from "react";
import { Editor, ProjectData } from "grapesjs";
import {
  grapes_js_static_init_config,
  grapes_js_studio_static_init_config,
  grapes_js_typed_plugin_config,
} from "./SalesPageBuilder.constants";
import grapesjsPresetWebpagePluginModified from "./plugins/grapesjsPresetWebpagePluginModified";
import registerButtonPlugin from "./plugins/registerButtonPlugin";
import grapesjsBlocksBasicPluginModified from "./plugins/grapesjsBlocksBasicPluginModified";
import saveNLoadPlugin from "./plugins/saveNLoadPlugin";
import gjsCountdownPlugin from "grapesjs-component-countdown";
import gjsCustomCodePlugin from "grapesjs-custom-code";
import gjsTypedPlugin from "grapesjs-typed";
import pastePlainTextPlugin from "./plugins/pastePlainTextPlugin";
import grapesjsSwiperSliderPluginModified from "./plugins/grapesjsSwiperSliderPluginModified";
import grapesjsAccordionPluginModified from "./plugins/grapesjsAccordionPluginModified";
import grapesjsGoogleMaterialIconsPluginModified from "./plugins/grapesjsGoogleMaterialIconsPluginModified";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import grapesjsTailwindPlugin from "grapesjs-tailwind";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import grapesjsUndrawPlugin from "grapesjs-undraw";
import parserPostCSS from "grapesjs-parser-postcss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import grapesjsComponentCodeEditorPlugin from "grapesjs-component-code-editor";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import grapesjsComponentTwitch from "grapesjs-component-twitch";
import grapesjsTuiImageEditorPlugin from "grapesjs-tui-image-editor";
import grapesjsBlocksFlexboxPlugin from "grapesjs-blocks-flexbox";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pluginTooltip from "grapesjs-tooltip";
import { rteProseMirror } from "@grapesjs/studio-sdk-plugins";
import { getTopbarRightButtons as getTailwindTopbarRightButtons } from "./plugins/gjsTailwindSupport/buttons";
import { gjsTailwindEscapeName } from "./plugins/gjsTailwindSupport/utils";
import { getTopbarRightButtons as getWebpagePresetTopbarRightButtons } from "./plugins/grapesjsPresetWebpagePluginModified/buttons";
import { gjsTailwindSupport } from "./plugins/gjsTailwindSupport";
import { grapesjsUndrawPluginSupport } from "./plugins/grapesjsUndrawPluginSupport";
import { page1 } from "./utils/page1";
import { page2 } from "./utils/page2";
import traitsPlugin from "./plugins/traitsPlugin";
import StudioEditor from "@grapesjs/studio-sdk/react";

const SalesPageBuilder = () => {
  const payloadRef = useRef<{
    registerButtonHref?: string;
    creatorUuid?: string;
    salePageUuid?: string;
    htmlString?: string;
    projectData?: ProjectData;
  }>({});

  const [mountBuilder, setMountBuilder] = useState(false);

  useEffect(() => {
    payloadRef.current = window.location.href.includes("page=1")
      ? { ...page1 }
      : { ...page2 };
    setMountBuilder(true);

    return () => {
      payloadRef.current = {};
      setMountBuilder(false);
    };
  }, []);

  const registerButtonHref = payloadRef.current?.registerButtonHref;
  const creatorUuid = payloadRef.current?.creatorUuid;
  const salePageUuid = payloadRef.current?.salePageUuid;
  const htmlString = payloadRef.current?.htmlString;
  const projectData = payloadRef.current?.projectData;

  if (!mountBuilder || !salePageUuid || !creatorUuid || !registerButtonHref)
    return null;

  return (
    <StudioEditor
      options={{
        ...grapes_js_studio_static_init_config,
        project: { type: "web", id: salePageUuid },
        storage: { type: "self", project: projectData, onSave: async () => {} },
        identity: { id: creatorUuid },
        gjsOptions: {
          ...grapes_js_static_init_config,
          selectorManager: { escapeName: gjsTailwindEscapeName },
        },
        layout: {
          default: {
            type: "row",
            style: { height: "100%" },
            children: [
              {
                type: "sidebarLeft",
                children: {
                  type: "tabs",
                  value: "blocks",
                  tabs: [
                    {
                      id: "blocks",
                      label: "Blocks",
                      children: {
                        type: "panelBlocks",
                        style: { height: "100%" },
                      },
                    },
                    {
                      id: "layers",
                      label: "Layers",
                      children: {
                        type: "panelLayers",
                        style: { height: "100%" },
                      },
                    },
                  ],
                },
              },
              {
                type: "canvasSidebarTop",
                sidebarTop: {
                  leftContainer: { buttons: ({ items }) => items },
                  rightContainer: {
                    buttons: ({ items, editor }) => {
                      let newItems = items;
                      if (
                        typeof getWebpagePresetTopbarRightButtons === "function"
                      )
                        newItems = getWebpagePresetTopbarRightButtons({
                          items: newItems,
                          editor,
                        });

                      if (typeof getTailwindTopbarRightButtons === "function")
                        newItems = getTailwindTopbarRightButtons({
                          items: newItems,
                          editor,
                        });

                      /* grapesjs-component-code-editor */
                      // {
                      //   id: "open-code",
                      //   size: "s",
                      //   title: "View Component Code",
                      //   icon: `<svg viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"></path></svg>`,
                      //   onClick: ({ editor }: { editor: Editor }) => {
                      //     editor.Commands.isActive("open-code")
                      //       ? editor.stopCommand("open-code")
                      //       : editor.runCommand("open-code");
                      //   },
                      // },
                      /* grapesjs-component-code-editor */

                      return newItems;
                    },
                  },
                },
                grow: true,
              },
              {
                type: "sidebarRight",
                children: {
                  type: "tabs",
                  value: "props",
                  tabs: [
                    {
                      id: "styles",
                      label: "Styles",
                      children: {
                        type: "column",
                        style: { height: "100%" },
                        children: [
                          {
                            type: "panelSelectors",
                            style: { padding: 5 },
                          },
                          { type: "panelStyles" },
                        ],
                      },
                    },
                    {
                      id: "props",
                      label: "Properties",
                      children: {
                        type: "panelProperties",
                        style: { padding: 5, height: "100%" },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        plugins: [
          grapesjsPresetWebpagePluginModified,

          (ed: Editor) => registerButtonPlugin(ed, { registerButtonHref }),

          grapesjsBlocksBasicPluginModified,

          (ed: Editor) => saveNLoadPlugin(ed, { htmlString, projectData }),

          gjsCountdownPlugin,

          gjsCustomCodePlugin,

          (ed: Editor) => gjsTypedPlugin(ed, grapes_js_typed_plugin_config),

          pastePlainTextPlugin,

          grapesjsSwiperSliderPluginModified,

          grapesjsAccordionPluginModified,

          grapesjsGoogleMaterialIconsPluginModified,

          grapesjsTailwindPlugin,
          gjsTailwindSupport,

          parserPostCSS,

          grapesjsUndrawPlugin,
          grapesjsUndrawPluginSupport,

          grapesjsComponentCodeEditorPlugin,

          (ed: Editor) =>
            grapesjsComponentTwitch(ed, {
              block: {
                attributes: {},
                media:
                  '<svg viewBox="0 0 24 24"><path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z" /></svg>',
              },
            }),

          rteProseMirror?.init({
            plugins: ({ plugins }) => [
              // use the default plugins
              ...plugins,
              // Custom ProseMirror plugin
              // new Plugin({ appendTransaction(tr) {} })
            ],
            toolbar({ items }) {
              return [
                // Default toolbar items
                ...items,
              ];
            },
          }),

          grapesjsTuiImageEditorPlugin,

          (ed: Editor) =>
            grapesjsBlocksFlexboxPlugin(ed, {
              flexboxBlock: {
                media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path></svg>`,
              },
            }),

          traitsPlugin,

          pluginTooltip,
        ],
      }}
    />
  );
};

export default SalesPageBuilder;
