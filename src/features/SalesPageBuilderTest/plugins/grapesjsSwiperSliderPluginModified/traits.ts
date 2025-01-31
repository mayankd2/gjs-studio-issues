import { Component, Editor } from "grapesjs";
import { IPluginOptions, WindowWithSwiperInstances } from "./interfaces";
import {
  containerName,
  slideName,
  slidesListTraitCtnClassname,
} from "./constants";

function loadTraits(editor: Editor, config: IPluginOptions) {
  const updateChildrenList = () => {
    const el = document.getElementsByClassName(
      slidesListTraitCtnClassname,
    )?.[0];
    if (!el) return;

    const containerComponent = editor.getSelected();
    if (!containerComponent) return;

    // Clear the container
    el.innerHTML = "";

    const wrapperComponent = containerComponent
      .components()
      .find((i: Component) => i.attributes.type === config.classWrapper);

    const childComponents = wrapperComponent?.components() || [];

    childComponents.forEach((child: Component, index: number) => {
      const childRow = document.createElement("div");
      childRow.className = "child-row";
      childRow.style.display = "flex";
      childRow.style.justifyContent = "space-between";
      childRow.style.marginBottom = "5px";
      childRow.style.alignItems = "center";
      childRow.style.padding = "5px";

      const childName = document.createElement("span");
      childName.innerText = `${index + 1}: ${child.get("name")}`;
      childName.style.cursor = "pointer";
      childName.style.flexGrow = "1";
      childName.onclick = () => {
        const swiperInstance = (
          editor.Canvas.getWindow() as WindowWithSwiperInstances
        ).swiperInstances[containerComponent.ccid];
        if (!swiperInstance) return;

        swiperInstance.slideTo(index);
      };

      childRow.appendChild(childName);

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = `<svg class="gjs-two-color" width="20px" style="display: block;" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path></svg>`;
      deleteButton.style.backgroundColor = "transparent";
      deleteButton.style.color = "white";
      deleteButton.style.border = "none";
      deleteButton.style.cursor = "pointer";
      deleteButton.style.padding = "0px";
      deleteButton.onclick = () => {
        child.remove();

        const swiperInstance = (
          editor.Canvas.getWindow() as WindowWithSwiperInstances
        ).swiperInstances[containerComponent.ccid];
        swiperInstance.update();

        updateChildrenList();
      };

      childRow.appendChild(deleteButton);
      el.appendChild(childRow);
    });
  };

  // Update the list whenever the component is selected
  editor.on("component:selected", (component: Component) => {
    if (component.attributes.type === containerName) {
      // wait for target element (element with classname slidesListTraitCtnClassname) to appear in DOM
      setTimeout(updateChildrenList, 100);
    }
  });

  // Update the list whenever a new slide is added
  editor.on("component:add", (component: Component) => {
    if (component.attributes.type === slideName) {
      updateChildrenList();
    }
  });

  // Update the list the traits(Properties) tab is opened
  editor.on("load", () => {
    const el = document.getElementById("headlessui-tabs-tab-:r6:");
    if (!el) return;

    el.addEventListener("click", () => {
      // wait for target element (element with classname slidesListTraitCtnClassname) to appear in DOM
      setTimeout(updateChildrenList, 100);
    });
  });
}

export default loadTraits;
