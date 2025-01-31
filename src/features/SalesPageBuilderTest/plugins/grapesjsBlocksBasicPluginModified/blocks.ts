import type { Editor } from "grapesjs";
import { debounce } from "../../../Common/utils/debounce";

export default function (editor: Editor) {
  // function triggers twice, so debouncing this
  const onVideoAutoplayChange = debounce((component) => {
    if (
      // only trigger if video tag
      component.attributes.tagName === "video" &&
      // AND if video block
      component.attributes.type === "video"
    ) {
      // video needs to be muted to play
      component.setAttributes({ muted: component.changed.autoplay });
    }
  }, 100);

  // To make autoplay functionality work properly for HTML5 videos.
  editor.on("component:update:autoplay", onVideoAutoplayChange);
}
