import { Block, Plugin } from "grapesjs";

export const gjsTailwindSupport: Plugin = (ed) => {
  ed.Panels.addButton("options", {
    id: "update-theme",
    className: "fa fa-adjust",
    command: "open-update-theme",
    attributes: {
      title: "Update Theme",
      "data-tooltip-pos": "bottom",
    },
  });

  // fix tailwind's block labels and media
  ed.Blocks.getAll().forEach((block: Block) => {
    if (
      [
        "blog-block-",
        "contact-block-",
        "content-block-",
        "cta-block-",
        "commerce-block-",
        "feature-block-",
        "footer-block-",
        "gallery-block-",
        "header-block-",
        "hero-block-",
        "pricing-block-",
        "statistic-block-",
        "step-block-",
        "team-block-",
        "testimonial-block-",
      ].some((prefix) => `${block.id}`.startsWith(prefix))
    ) {
      const label = block.getLabel();
      // put the label in the media field
      block.set({
        media: label,
        label: "",
      });
    }
  });
};
