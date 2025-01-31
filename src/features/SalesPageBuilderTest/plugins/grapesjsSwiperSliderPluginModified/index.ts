import { Plugin } from "grapesjs";
import loadComponents from "./components/index";
import loadBlocks from "./blocks";
import { IPluginOptions } from "./interfaces";
import loadTraits from "./traits";
import { classSlide, htmlSlide } from "./constants";

const grapesjsSwiperSliderPluginModified: Plugin<
  Partial<
    Omit<
      IPluginOptions,
      "slideEl" // making slideEl non configurable by user directly
    >
  >
> = (editor, opts = {}) => {
  const options: IPluginOptions = {
    ...{
      // Object to extend the default slider block, eg. `{ label: 'Container', attributes: { ... } }`
      // Pass a falsy value to avoid adding the block
      sliderBlock: {},

      // Object to extend the default slider properties, eg. `{ name: 'My Container', draggable: false, ... }`
      swiperProps: {},

      // Object to extend the default slider container properties
      containerProps: {},

      // Object to extend the default wrapper properties
      wrapperProps: {
        badgable: false,
        draggable: false,
        highlightable: false,
        hoverable: false,
        selectable: false,
      },

      // Object to extend the default slide properties
      slideProps: {
        badgable: false,
        draggable: false,
        highlightable: false,
        hoverable: false,
        selectable: false,
      },

      // Object to extend the default previous nav properties
      prevProps: {
        badgable: false,
        draggable: false,
        highlightable: false,
        hoverable: false,
        selectable: false,
      },

      // Object to extend the default next nav properties
      nextProps: {
        badgable: false,
        draggable: false,
        highlightable: false,
        hoverable: false,
        selectable: false,
      },

      // Object to extend the default pagination properties
      paginationProps: {
        badgable: false,
        draggable: false,
        highlightable: false,
        hoverable: false,
        selectable: false,
      },

      // Object to extend the default scrollbar properties
      scrollbarProps: {},

      // Default slide
      slideEl: htmlSlide,

      // Previous nav element string, as for example, an HTML string
      prevEl: `<div class="swiper-button-prev"></div>`,

      // Next nav element string, as for example, an HTML string
      nextEl: `<div class="swiper-button-next"></div>`,

      paginationEl: `<div class="swiper-pagination"></div>`,

      scrollbarEl: `<div class="swiper-scrollbar"></div>`,

      // Class name for the slider frame
      classContainer: "swiper-container",

      // Class name for slides container
      classWrapper: "swiper-wrapper",

      // Class name for slides container
      classSlide: classSlide,

      // Class name for slider previous control
      classPrev: "swiper-button-prev",

      // Class name for slider next control
      classNext: "swiper-button-next",

      classPagination: "swiper-pagination",

      classScrollbar: "swiper-scrollbar",

      // Script to load dynamically in case no Swiper instance was found
      script: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",

      // Style to load dynamically in case no Swiper instance was found
      style: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",

      sliderProps: {},
    },
    ...opts,
  };

  // Add traits
  loadTraits(editor, options);

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);
};

export default grapesjsSwiperSliderPluginModified;
