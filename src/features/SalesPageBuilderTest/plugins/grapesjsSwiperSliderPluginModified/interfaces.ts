import type Swiper from "swiper";

// The plugin we referenced from is not well maintained.
// It did not have definitions for most of the keys.
// That is why most of them are defined as `any`.
// TODO: figure out proper types and add them.

export type IPluginOptions = {
  sliderBlock: any;
  swiperProps: any;
  containerProps: any;
  wrapperProps: {
    badgable?: boolean;
    draggable?: boolean;
    highlightable?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
  };
  slideProps: {
    badgable?: boolean;
    draggable?: boolean;
    highlightable?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
  };
  prevProps: {
    badgable?: boolean;
    draggable?: boolean;
    highlightable?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
  };
  nextProps: {
    badgable?: boolean;
    draggable?: boolean;
    highlightable?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
  };
  paginationProps: {
    badgable?: boolean;
    draggable?: boolean;
    highlightable?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
  };
  scrollbarProps: any;
  slideEl: string;
  prevEl: string;
  nextEl: string;
  paginationEl: string;
  scrollbarEl: string;
  classContainer: string;
  classWrapper: string;
  classSlide: string;
  classPrev: string;
  classNext: string;
  classPagination: string;
  classScrollbar: string;
  script: string;
  style: string;
  sliderProps: any;
};

export type WindowWithSwiperInstances = Window & {
  swiperInstances: { [k: string]: Swiper };
};
