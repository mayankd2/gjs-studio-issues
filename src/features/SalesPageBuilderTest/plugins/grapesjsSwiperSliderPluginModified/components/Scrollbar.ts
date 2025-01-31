import { ComponentManager } from "grapesjs";
import { scrollbarName, containerSelector } from "../constants";
import { IPluginOptions } from "../interfaces";
import { elHasClass } from "../utils";

const Scrollbar = (dc: ComponentManager, config: IPluginOptions) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;
  const classId = config.classScrollbar;
  const type = scrollbarName;

  dc.addType(type, {
    isComponent(el) {
      if (elHasClass(el, classId)) return { type };
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Scrollbar",
        copyable: 0,
        draggable: containerSelector,
        ...config.scrollbarProps,
      },

      init() {
        const classIndex =
          this.get("classes")?.pluck("name").indexOf(classId) ?? 0;
        if (classIndex < 0) this.addClass(classId);
      },
    },

    view: { ...defaultType.view },
  });
};

export default Scrollbar;
