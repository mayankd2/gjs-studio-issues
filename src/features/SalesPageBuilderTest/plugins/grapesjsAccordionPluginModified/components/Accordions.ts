import { ComponentManager } from "grapesjs";
import { IPluginOptionsWLinkViewNModel } from "../interfaces";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { AccordionsModelScript } from "./AccordionsModelScript";

export default (
  dc: ComponentManager,
  { defaultModel, defaultView, ...config }: IPluginOptionsWLinkViewNModel,
) => {
  const type = "accordions";
  const attrAccordions = config.attrAccordions;

  dc.addType(type, {
    isComponent(el) {
      if (el.hasAttribute && el.hasAttribute(attrAccordions)) {
        return { type };
      }
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        copyable: false,
        droppable: false,
        name: "Accordions",
        "attr-accordions": config.attrAccordions,
        "attr-accordion": config.attrAccordion,
        "attr-accordion-content": config.attrAccordionContent,
        "attr-accordion-container": config.attrAccordionContainer,
        "class-accordion-active": config.classAccordionActive,
        "selector-accordion": config.selectorAccordion,

        script: AccordionsModelScript,
        ...config.accordionsProps,
      },

      init() {
        const attrs = this.getAttributes();
        attrs[config.attrAccordions] = 1;
        this.setAttributes(attrs);
      },
    },

    view: defaultView.extend({
      init() {
        const comps = this.model.components();
        !comps.length && comps.add(config.template);
      },

      onRender() {},
    }),
  });
};
