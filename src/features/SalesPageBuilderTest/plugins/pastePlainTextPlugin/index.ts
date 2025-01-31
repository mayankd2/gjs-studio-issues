import type { Plugin } from "grapesjs";

const pastePlainTextPlugin: Plugin = (editor) => {
  // to paste only plain text in page builder
  // ref - https://github.com/GrapesJS/grapesjs/issues/110#issuecomment-309426394
  const pastePlainText = (e: ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData?.getData("text");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e.target?.ownerDocument?.execCommand("insertText", false, text);
  };

  editor.on("canvas:frame:load:body", ({ el }: { el: HTMLIFrameElement }) => {
    const doc = el.contentDocument;
    doc?.body.addEventListener("paste", pastePlainText);
  });

  editor.on("load", () => {
    const iframeBody = editor.Canvas.getBody();
    if (!iframeBody) return;
    iframeBody.addEventListener("paste", pastePlainText);
  });
};

export default pastePlainTextPlugin;
