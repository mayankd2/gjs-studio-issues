import Accordion from "./Accordion";
import Accordions from "./Accordions";
import AccordionContent from "./AccordionContent";
import AccordionContainer from "./AccordionContainer";
import { Editor } from "grapesjs";
import { IPluginOptions } from "../interfaces";

export default (editor: Editor, config: IPluginOptions) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType("default");
  const linkType = dc.getType("link");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const linkModel = linkType?.model;
  const linkView = linkType?.view;
  const opts = {
    ...config,
    defaultModel,
    defaultView,
    linkModel,
    linkView,
  };

  Accordion(dc, opts);
  Accordions(dc, opts);
  AccordionContent(dc, opts);
  AccordionContainer(dc, opts);
};
