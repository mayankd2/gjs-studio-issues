export const elHasClass = (el: HTMLElement, toFind: string = "") => {
  if (!toFind) return 0;
  let cls = el.className;
  cls = cls && cls.toString();
  if (cls && cls.split(" ").indexOf(toFind) >= 0) return 1;
};
