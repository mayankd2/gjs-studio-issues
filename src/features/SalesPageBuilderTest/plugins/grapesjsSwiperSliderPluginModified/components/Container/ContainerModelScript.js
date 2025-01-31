/**
 * This script is responsible for initializing the Swiper instance
 * and adding the Swiper instance to the window object.
 *
 * This is executed in the editor's canvas and in the final rendered page.
 * So, the function does not have context of the editor.
 * It only knows the window and document of the page.
 */

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-this-alias */

export function ContainerModelScript() {
  const el = this;
  const scriptDeps = "{[ script-deps ]}";
  const styleDeps = "{[ style-deps ]}";
  const falsies = ["0", "false", "none"];
  const truthies = ["1", "true"];
  const elId = el.getAttribute("id");

  const options = {
    /**
     * keeping below code for future use
    initialSlide: parseInt("{[ initialSlide ]}", 10),
    speed: parseInt("{[ speed ]}", 10),
     */
    slidesPerView: parseInt("{[ slidesPerView ]}", 10),
    /**
     * keeping below code for future use
    spaceBetween: parseInt("{[ spaceBetween ]}", 10),
    slidesPerGroup: parseInt("{[ slidesPerGroup ]}", 10),
    slidesOffsetBefore: parseInt("{[ slidesOffsetBefore ]}", 10),
    slidesOffsetAfter: parseInt("{[ slidesOffsetAfter ]}", 10),
    direction: "{[ direction ]}",
     */
    effect: "{[ effect ]}",
    /**
     * keeping below code for future use
    autoHeight: isNaN("{[ autoHeight ]}"),
    watchOverflow: isNaN("{[ watchOverflow ]}"),
    centeredSlides: isNaN("{[ centeredSlides ]}"),
     */
    loop: isNaN("{[ loop ]}"),
    breakpointsInverse: true,
    /**
     * keeping below code for future use
    breakpoints: {
      576: {
        slidesPerView: parseInt("{[ smallSlidesPerView ]}", 10),
        spaceBetween: parseInt("{[ smallSpaceBetween ]}", 10),
        slidesPerGroup: parseInt("{[ smallSlidesPerGroup ]}", 10),
      },
      768: {
        slidesPerView: parseInt("{[ mediumSlidesPerView ]}", 10),
        spaceBetween: parseInt("{[ mediumSpaceBetween ]}", 10),
        slidesPerGroup: parseInt("{[ mediumSlidesPerGroup ]}", 10),
      },
      992: {
        slidesPerView: parseInt("{[ largeSlidesPerView ]}", 10),
        spaceBetween: parseInt("{[ largeSpaceBetween ]}", 10),
        slidesPerGroup: parseInt("{[ largeSlidesPerGroup ]}", 10),
      },
    },
    */
  };

  if (!truthies.includes("{[ hideArrows ]}")) {
    options.navigation = {
      nextEl: `#${elId} .swiper-button-next`,
      prevEl: `#${elId} .swiper-button-prev`,
    };
  }

  if (!falsies.includes("{[ pagination ]}")) {
    options.pagination = {
      el: `#${elId} .swiper-pagination`,
      type: "{[ pagination ]}",
      clickable: true,
    };
  }

  if (truthies.includes("{[ autoplay ]}")) {
    options.autoplay = {
      /**
       * keeping below code for future use
      delay: "{[ autoplayDelay ]}",
       */
      stopOnLastSlide: "{[ autoplayStopOnLastSlide ]}",
      disableOnInteraction: "{[ autoplayDisableOnInteraction ]}",
      reverseDirection: "{[ autoplayReverseDirection ]}",
      waitForTransition: "{[ autoplayWaitForTransition ]}",
    };
  }

  /**
   * keeping below code for future use
  if (isNaN("{[ scrollbar ]}")) {
    options.scrollbar = {
      el: `#${elId} .swiper-scrollbar`,
      draggable: true,
    };
  }
   */

  const initSlider = function () {
    if (window.swiperInstances) {
      // `Swiper` does exist on the window
      window.swiperInstances[elId] = new Swiper(el, options);
    } else {
      // `Swiper` does exist on the window
      window.swiperInstances = { [elId]: new Swiper(el, options) };
    }
  };

  if (scriptDeps && typeof Swiper === "undefined") {
    // Load the style tag
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = styleDeps;
    document.head.appendChild(link);

    // add style for empty slide
    const style = document.createElement("style");
    style.innerHTML = `.{[ class-slide ]}:empty::before {background-color: #ddd;color: #000;font-size: 16px;font-weight: bold;font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;height: inherit;min-height: inherit;display: flex;align-items: center;justify-content: center;padding: 0 10px;opacity: 0.3;border-radius: 3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;content: "Drag and drop a Block to add content";}`;
    document.head.appendChild(style);

    // Load the script tag
    const script = document.createElement("script");
    script.src = scriptDeps;
    script.onload = initSlider;
    document.head.appendChild(script);
  } else {
    initSlider();
  }
}
