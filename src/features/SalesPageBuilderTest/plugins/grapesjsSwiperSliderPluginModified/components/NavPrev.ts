import { ComponentManager } from "grapesjs";
import { prevName, containerSelector } from "../constants";
import { elHasClass } from "../utils";
import { IPluginOptions } from "../interfaces";

const NavPrev = (dc: ComponentManager, config: IPluginOptions) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;
  const classId = config.classPrev;
  const type = prevName;

  dc.addType(type, {
    isComponent(el) {
      if (elHasClass(el, classId)) return { type };
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Nav Previous",
        copyable: 0,
        draggable: containerSelector,
        ...config.prevProps,
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

export default NavPrev;
