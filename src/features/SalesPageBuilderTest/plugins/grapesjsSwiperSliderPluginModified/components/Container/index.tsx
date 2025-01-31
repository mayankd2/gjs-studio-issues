import { Component, Editor } from "grapesjs";
import {
  containerName,
  wrapperName,
  prevName,
  nextName,
  paginationName,
  wrapperSelector,
  prevSelector,
  nextSelector,
  paginationSelector,
  scrollbarSelector,
  containerId,
  slidesListTraitCtnClassname,
} from "../../constants";
import { IPluginOptions } from "../../interfaces";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ContainerModelScript } from "./ContainerModelScript";
import { onAddSlideClick } from "./onAddSlideClick";

const Container = (editor: Editor, config: IPluginOptions) => {
  const domComponents = editor.DomComponents;

  const defaultType = domComponents.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domComponents.addType(containerName, {
    isComponent(el) {
      if (el.hasAttribute && el.hasAttribute(containerId)) {
        return { type: containerName };
      }
    },

    model: {
      defaults: {
        ...defaultModel.prototype.defaults,

        name: "Swiper Slider",

        // Properties
        /**
         * keeping below code for future use
        initialSlide: "0",
        speed: 300,
        */
        slidesPerView: 1,
        /**
         * keeping below code for future use
        spaceBetween: "0",
        slidesPerGroup: 1,
        slidesOffsetBefore: "0",
        slidesOffsetAfter: "0",
        direction: "horizontal",
         */
        effect: "slide",
        /**
         * keeping below code for future use
        autoHeight: false,
        watchOverflow: true,
        centeredSlides: false,
         */
        loop: false,
        pagination: "bullets",
        /**
         * keeping below code for future use
        scrollbar: false,
         */
        hidePagination: false,
        hideArrows: false,

        // Autoplay
        autoplay: false,
        /**
         * keeping below code for future use
        autoplayDelay: 3000,
        autoplayStopOnLastSlide: false,
        autoplayDisableOnInteraction: true,
        autoplayReverseDirection: false,
        autoplayWaitForTransition: true,
         */

        // Small
        smallSlidesPerView: 1,
        smallSpaceBetween: "0",
        smallSlidesPerGroup: 1,

        // Medium
        mediumSlidesPerView: 1,
        mediumSpaceBetween: "0",
        mediumSlidesPerGroup: 1,

        // Large
        largeSlidesPerView: 1,
        largeSpaceBetween: "0",
        largeSlidesPerGroup: 1,

        traits: [
          {
            label: false,
            type: "button",
            full: true,
            text: "Add Slide",
            name: "addSlider",
            changeProp: 1,
            command: (ed) => onAddSlideClick(ed, config),
          },

          {
            type: "custom",
            name: "from-custom",
            label: "Custom React Component",
            value: "Default value",
            component: () => <div className={slidesListTraitCtnClassname} />,
          },

          /**
           * keeping below code for future use
          {
            type: "number",
            label: "Initial Slide",
            name: "initialSlide",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Speed",
            name: "speed",
            changeProp: 1,
          },
           */
          {
            type: "number",
            label: "Slides Per View",
            name: "slidesPerView",
            changeProp: 1,
          },
          /**
           * keeping below code for future use
          {
            type: "number",
            label: "Space Between",
            name: "spaceBetween",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Slides Per Group",
            name: "slidesPerGroup",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Slides Offset Before",
            name: "slidesOffsetBefore",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Slides Offset After",
            name: "slidesOffsetAfter",
            changeProp: 1,
          },
           */
          {
            type: "checkbox",
            label: "Autoplay",
            name: "autoplay",
            changeProp: 1,
          },
          /**
           * keeping below code for future use
          {
            type: "number",
            label: "Autoplay Delay",
            name: "autoplayDelay",
            changeProp: 1,
          },
          {
            type: "checkbox",
            label: "Autoplay stop on Last slide",
            name: "autoplayStopOnLastSlide",
            changeProp: 1,
          },
          {
            type: "checkbox",
            label: "Autoplay disable on interaction",
            name: "autoplayDisableOnInteraction",
            changeProp: 1,
          },
          {
            type: "checkbox",
            label: "Autoplay reverse direction",
            name: "autoplayReverseDirection",
            changeProp: 1,
          },
          {
            type: "checkbox",
            label: "Autoplay wait for transition",
            name: "autoplayWaitForTransition",
            changeProp: 1,
          },
          {
            type: "select",
            label: "Direction",
            name: "direction",
            changeProp: 1,
            options: ["horizontal", "vertical"],
          },
           */
          {
            type: "select",
            label: "Transition effect",
            name: "effect",
            changeProp: 1,
            options: ["slide", "fade", "cube", "coverflow", "flip"],
          },
          /**
           * keeping below code for future use
          {
            type: "checkbox",
            label: "Auto Height",
            name: "autoHeight",
            changeProp: 1,
          },
          {
            type: "checkbox",
            label: "Watch Overflow",
            name: "watchOverflow",
            changeProp: 1,
          },
          {
            type: "checkbox",
            label: "Centered Slides",
            name: "centeredSlides",
            changeProp: 1,
          },
           */
          {
            type: "checkbox",
            label: "Loop",
            name: "loop",
            changeProp: 1,
          },
          /**
           * keeping below code for future use
          {
            type: "checkbox",
            label: "Scrollbar",
            name: "scrollbar",
            changeProp: 1,
          },
           */
          {
            type: "select",
            label: "Pagination",
            name: "pagination",
            changeProp: 1,
            options: ["none", "bullets", "fraction", "progressbar"],
          },
          {
            type: "checkbox",
            label: "Hide Arrows",
            name: "hideArrows",
            changeProp: 1,
          },
          {
            type: "checkbox",
            label: "Hide Pagination",
            name: "hidePagination",
            changeProp: 1,
          },
          /**
           * keeping below code for future use
          // Small
          {
            type: "number",
            label: "Small Slides Per View",
            name: "smallSlidesPerView",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Small Space Between",
            name: "smallSpaceBetween",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Small Slider Per Group",
            name: "smallSlidesPerGroup",
            changeProp: 1,
          },

          // Medium
          {
            type: "number",
            label: "Medium Slides Per View",
            name: "mediumSlidesPerView",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Medium Space Between",
            name: "mediumSpaceBetween",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Medium Slider Per Group",
            name: "mediumSlidesPerGroup",
            changeProp: 1,
          },

          // Large
          {
            type: "number",
            label: "Large Slides Per View",
            name: "largeSlidesPerView",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Large Space Between",
            name: "largeSpaceBetween",
            changeProp: 1,
          },
          {
            type: "number",
            label: "Large Slider Per Group",
            name: "largeSlidesPerGroup",
            changeProp: 1,
          },
          */
        ],

        droppable: `${wrapperSelector}, ${prevSelector}, ${nextSelector}, ${scrollbarSelector}, ${paginationSelector}}`,

        draggable: true,

        style: {
          height: "300px",
          position: "relative",
          overflow: "hidden",
        },

        "script-deps": config.script,
        "style-deps": config.style,
        "class-container": config.classContainer,
        "class-wrapper": config.classWrapper,
        "class-slide": config.classSlide,
        "class-prev": config.classPrev,
        "class-next": config.classNext,
        "class-pagination": config.classPagination,
        "class-scrollbar": config.classScrollbar,

        script: ContainerModelScript,
        ...config.sliderProps,
      },
    },

    view: {
      ...defaultView.view,
      init() {
        const props = [
          /**
           * keeping below code for future use
          "initialSlide",
          "speed",
          */
          "slidesPerView",
          /**
           * keeping below code for future use
          "spaceBetween",
          "slidesPerGroup",
          "slidesOffsetBefore",
          "slidesOffsetAfter",
          "direction",
           */
          "effect",
          /**
           * keeping below code for future use
          "autoHeight",
          "watchOverflow",
          "centeredSlides",
           */
          "loop",
          "pagination",
          /**
           * keeping below code for future use
          "scrollbar",
           */
          "autoplay",
          /**
           * keeping below code for future use
          "autoplayDelay",
          "autoplayStopOnLastSlide",
          "autoplayDisableOnInteraction",
          "autoplayReverseDirection",
          "autoplayWaitForTransition",
           */

          // Small
          "smallSlidesPerView",
          "smallSpaceBetween",
          "smallSlidesPerGroup",

          // Medium
          "mediumSlidesPerView",
          "mediumSpaceBetween",
          "mediumSlidesPerGroup",

          // Large
          "largeSlidesPerView",
          "largeSpaceBetween",
          "largeSlidesPerGroup",
        ];

        const reactTo = props.map((prop) => `change:${prop}`).join(" ");
        this.listenTo(this.model, reactTo, this.render);
        const comps = this.model.components();

        // Add a basic template if it's not yet initialized
        if (!comps.length) {
          comps.add(`
            <div data-gjs-type="${wrapperName}">${config.slideEl}${config.slideEl}${config.slideEl}</div>
            <div data-gjs-type="${prevName}"></div>
            <div data-gjs-type="${nextName}"></div>
            <div data-gjs-type="${paginationName}"></div>
          `);
        }
      },
    },
  });

  editor.on("trait:value", ({ trait, component, value }) => {
    if (trait.id === "hideArrows") {
      const components = component.components();
      const prev: Component = components.find(
        (i: Component) => i.attributes.type === prevName,
      );
      const next = components.find(
        (i: Component) => i.attributes.type === nextName,
      );
      prev?.setStyle({ display: value ? "none" : "" });
      next?.setStyle({ display: value ? "none" : "" });
    }
    if (trait.id === "hidePagination") {
      const components = component.components();
      const pagination: Component = components.find(
        (i: Component) => i.attributes.type === paginationName,
      );
      pagination?.setStyle({ display: value ? "none" : "" });
    }
  });
};

export default Container;
