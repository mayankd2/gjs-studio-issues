/**
 * This script is responsible for initializing the Accordions instance.
 *
 * This is executed in the editor's canvas and in the final rendered page.
 * So, the function does not have context of the editor.
 * It only knows the window and document of the page.
 */

/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-unused-vars */

export function AccordionsModelScript() {
  var i;
  var el = this;
  var attrAccordions = "[" + "{[ attr-accordions ]}" + "]";
  var attrAccordion = "[" + "{[ attr-accordion ]}" + "]";
  var attrAccordionContent = "[" + "{[ attr-accordion-content ]}" + "]";
  var attrAccordionContainer = "[" + "{[ attr-accordion-container ]}" + "]";
  var classAccordionActive = "{[ class-accordion-active ]}";
  var selectorAccordion = "{[ selector-accordion ]}";
  var body = document.body;
  var matches =
    body.matchesSelector ||
    body.webkitMatchesSelector ||
    body.mozMatchesSelector ||
    body.msMatchesSelector;

  // var hideContents = () => {
  //   var accordionContents =
  //     el.querySelectorAll(attrAccordionContent) || [];
  //   if (accordionContents) {
  //     for (i = 0; i < accordionContents.length; i++) {
  //       accordionContents[i].style.display = "none";
  //     }
  //   }
  // };

  var activeAccordion = (accordionEl) => {
    var accordionContainers = el.querySelectorAll(attrAccordionContainer) || [];

    if (accordionContainer) {
      for (i = 0; i < accordionContainers.length; i++) {
        var accordionContainer = accordionContainers[i];
        var newClass = accordionContainer.className
          .replace(classAccordionActive, "")
          .trim();

        accordionContainer.className = newClass;
      }
    }

    // hideContents();
    accordionEl.className += " " + classAccordionActive;
  };

  var deactiveAccordion = (accordionEl) => {
    var newClass = accordionEl.className
      .replace(classAccordionActive, "")
      .trim();
    accordionEl.className = newClass;
  };

  el.addEventListener("click", (e) => {
    var target = e.target;
    if (matches.call(target, attrAccordion)) {
      if (
        el.querySelector(target.getAttribute(selectorAccordion)).style
          .display === "block"
      ) {
        deactiveAccordion(target.parentElement);
        el.querySelector(target.getAttribute(selectorAccordion)).style.display =
          "none";
      } else {
        activeAccordion(target.parentElement);
        el.querySelector(target.getAttribute(selectorAccordion)).style.display =
          "block";
      }
    }
  });
}
