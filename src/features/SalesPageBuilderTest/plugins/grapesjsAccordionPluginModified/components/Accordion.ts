import { ComponentManager } from "grapesjs";
import { IPluginOptionsWLinkViewNModel } from "../interfaces";

export default (
  dc: ComponentManager,
  { linkModel, linkView, ...config }: IPluginOptionsWLinkViewNModel,
) => {
  const type = "accordion";
  const attrKey = config.attrAccordion;
  const classKey = config.classAccordion;
  const selectorAccordion = config.selectorAccordion;

  dc.addType(type, {
    isComponent(el) {
      if (el.hasAttribute && el.hasAttribute(attrKey)) {
        return { type };
      }
    },

    model: {
      defaults: {
        ...linkModel.prototype.defaults,
        name: "Accordion",
        draggable: `[${config.attrAccordionContainer}]`,
        droppable: false,
        copyable: false,
        removable: false,
        // selectable: false, // make individual accordion selectable
        ...config.accordionProps,
      },

      init() {
        const attrs = this.getAttributes();
        attrs[attrKey] = 1;
        this.setAttributes(attrs);
        classKey && this.addClass(classKey);
      },

      clone() {
        // eslint-disable-next-line prefer-rest-params
        const cloned = linkModel.prototype.clone.apply(this, arguments);
        cloned.addAttributes({ [selectorAccordion]: "" });
        return cloned;
      },
    },
    view: linkView,
  });
};
