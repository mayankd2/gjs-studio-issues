export interface IPluginOptions {
  accordionsBlock: any;
  style: string;
  attrAccordion: string;
  classAccordion: string;
  selectorAccordion: string;
  attrAccordionContainer: string;
  accordionProps: any;
  attrAccordions: string;
  attrAccordionContent: string;
  classAccordionActive: string;
  accordionsProps: any;
  template: string;
  classAccordionContent: string;
  accordionContentProps: any;
  classAccordionContainer: string;
  accordionContainerProps: any;
}

export interface IPluginOptionsWLinkViewNModel extends IPluginOptions {
  linkModel?: any;
  linkView?: any;
  defaultModel?: any;
  defaultView?: any;
}
