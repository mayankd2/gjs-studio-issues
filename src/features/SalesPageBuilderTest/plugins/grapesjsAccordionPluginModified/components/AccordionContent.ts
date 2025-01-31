import { ComponentManager } from "grapesjs";
import { IPluginOptionsWLinkViewNModel } from "../interfaces";

export default (
  dc: ComponentManager,
  { defaultModel, defaultView, ...config }: IPluginOptionsWLinkViewNModel,
) => {
  const type = "accordion-content";
  const attrKey = config.attrAccordionContent;
  const classKey = config.classAccordionContent;

  dc.addType(type, {
    isComponent(el) {
      if (el.hasAttribute && el.hasAttribute(attrKey)) {
        return { type };
      }
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Accordion Content",
        draggable: `[${config.attrAccordionContainer}]`,
        copyable: false,
        removable: false,
        selectable: true,
        ...config.accordionContentProps,
      },

      init() {
        const attrs = this.getAttributes();
        attrs[attrKey] = 1;
        this.setAttributes(attrs);
        classKey && this.addClass(classKey);
      },
    },

    view: defaultView,
  });
};
