import { ComponentManager } from "grapesjs";
import { paginationName, containerSelector } from "../constants";
import { elHasClass } from "../utils";
import { IPluginOptions } from "../interfaces";

const Pagination = (dc: ComponentManager, config: IPluginOptions) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;
  const classId = config.classPagination;
  const type = paginationName;

  dc.addType(type, {
    isComponent(el) {
      if (elHasClass(el, classId)) return { type };
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Pagination",
        copyable: 0,
        draggable: containerSelector,
        ...config.paginationProps,
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

export default Pagination;
