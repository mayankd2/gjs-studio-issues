import { Component, Editor } from "grapesjs";
import { IPluginOptions, WindowWithSwiperInstances } from "../../interfaces";

export function onAddSlideClick(editor: Editor, config: IPluginOptions) {
  const containerComponent = editor.getSelected();
  if (!containerComponent) return;

  const wrapperComponent = containerComponent
    .components()
    .find((i: Component) => i.attributes.type === config.classWrapper);
  if (!wrapperComponent) return;

  const swiperInstance = (
    editor.Canvas.getWindow() as WindowWithSwiperInstances
  ).swiperInstances[containerComponent.ccid];
  if (!swiperInstance) return;

  const containerElement = editor.Canvas.getDocument().getElementById(
    containerComponent.ccid,
  );
  if (!containerElement) return;

  wrapperComponent.append(config.slideEl);
  swiperInstance.destroy(false, false);
  swiperInstance.init(containerElement);
}
