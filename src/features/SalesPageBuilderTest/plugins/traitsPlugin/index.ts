import { Editor, TraitProperties } from "grapesjs";

const traitsPlugin = (ed: Editor) => {
  const imageModelDefaults =
    ed.DomComponents.getType("image")?.model.prototype.defaults;
  if (!imageModelDefaults) return;

  ed.DomComponents.addType("image", {
    extend: "image",
    model: {
      defaults: {
        ...imageModelDefaults,
        traits: [...imageModelDefaults.traits, "src"], // add src to traits
      },
    },
  });

  const textModelDefaults =
    ed.DomComponents.getType("text")?.model.prototype.defaults;
  if (!textModelDefaults) return;

  ed.DomComponents.addType("text", {
    extend: "text",
    model: {
      defaults: {
        ...textModelDefaults,
        traits: [
          ...textModelDefaults.traits.map((i: string | TraitProperties) =>
            i === "title"
              ? { id: "title", name: "title", label: "Hover Text" } // modify "title" trait for "text"
              : i,
          ),
        ],
      },
    },
  });
};
export default traitsPlugin;
