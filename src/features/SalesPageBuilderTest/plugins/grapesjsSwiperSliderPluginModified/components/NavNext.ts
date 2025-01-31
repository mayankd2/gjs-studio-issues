import { ComponentManager } from "grapesjs";
import { nextName, containerSelector } from "../constants";
import { elHasClass } from "../utils";
import { IPluginOptions } from "../interfaces";

const NavNext = (dc: ComponentManager, config: IPluginOptions) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;
  const classId = config.classNext;
  const type = nextName;

  dc.addType(type, {
    isComponent(el) {
      if (elHasClass(el, classId)) return { type };
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Nav Next",
        copyable: 0,
        draggable: containerSelector,
        ...config.nextProps,
      },

      init() {
        const indexOfClass =
          this.get("classes")?.pluck("name").indexOf(classId) ?? 0;
        if (indexOfClass < 0 && classId) this.addClass(classId);
      },
    },

    view: { ...defaultType.view },
  });
};

export default NavNext;
