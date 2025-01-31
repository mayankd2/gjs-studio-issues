import { ComponentManager } from "grapesjs";
import { slideName, wrapperSelector } from "../constants";
import { elHasClass } from "../utils";
import { IPluginOptions } from "../interfaces";

const Slide = (dc: ComponentManager, config: IPluginOptions) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;

  dc.addType(slideName, {
    isComponent(el) {
      if (elHasClass(el, config.classSlide)) return { type: slideName };
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Slide",
        draggable: wrapperSelector,
        ...config.slideProps,
      },
    },

    view: { ...defaultType.view },
  });
};

export default Slide;
