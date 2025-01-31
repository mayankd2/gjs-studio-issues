import { Editor } from "grapesjs";

export const html_head_tags =
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404084845" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404087635" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404089108" />';

const updateCanvasHead = (editor: Editor) => {
  const doc = editor.Canvas.getDocument();
  if (!doc) {
    // This happens while grapesjs is not ready
    return;
  }

  const head = doc.head;

  head.insertAdjacentHTML("beforeend", html_head_tags);
  document.head.insertAdjacentHTML("beforeend", html_head_tags);
};

export const loadMaterialIcons = (editor: Editor) => {
  // In some devices, the canvas head is avialable once "canvas:frame:load:head" is fired.
  editor.on("canvas:frame:load:head", () => {
    updateCanvasHead(editor);
  });

  // And in some devices, the canvas head is avialable once "load" is fired.
  editor.on("load", (ed) => {
    updateCanvasHead(ed);
  });
};
