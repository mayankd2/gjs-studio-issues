import { ComponentManager } from "grapesjs";
import { wrapperName, slideSelector, containerSelector } from "../constants";
import { elHasClass } from "../utils";
import { IPluginOptions } from "../interfaces";

const Wrapper = (dc: ComponentManager, config: IPluginOptions) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;

  dc.addType(wrapperName, {
    isComponent(el) {
      if (elHasClass(el, config.classWrapper)) return { type: wrapperName };
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Wrapper",
        droppable: slideSelector,
        draggable: containerSelector,
        ...config.wrapperProps,
      },

      init() {
        const cls = config.classWrapper;

        const indexOfClass =
          this.get("classes")?.pluck("name").indexOf(cls) ?? 0;
        if (cls && indexOfClass < 0) this.addClass(cls);
      },
    },

    view: {
      ...defaultType.view,

      init() {
        this.listenTo(this.model.components(), "add remove", this.renderSlider);
      },

      renderSlider() {
        const slider = this.model.parent()?.parent();
        slider && slider.view?.render();
      },
    },
  });
};

export default Wrapper;
