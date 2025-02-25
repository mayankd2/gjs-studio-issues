import { Plugin } from "grapesjs";
import IconPickerPopupType from "./IconPickerPopupType";
import "./iconPicker.css";

const grapesjsGoogleMaterialIconsPluginModified: Plugin = (editor) => {
  editor.DomComponents.addType("materialIcons", {
    view: {
      events: {
        // TODO: Fix here after this is fixed https://github.com/GrapesJS/grapesjs/blob/9314b57ac91e370bc0adb9ea958e9201dd0a468a/src/asset_manager/view/AssetImageView.ts#L93C16-L93C16
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dblclick: "onActive",
      },
      onActive() {
        editor.Commands.run("open:icon-picker");
      },
    },
  });

  editor.BlockManager.add("materialIcon", {
    label: "Material Icon",
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.495 1.31601C22.813 1.5738 22.9977 1.96478 22.9977 2.37723V8.56409C22.9977 9.70264 21.7646 10.6264 20.248 10.6264C18.7314 10.6264 17.4983 9.70264 17.4983 8.56409C17.4983 7.42554 18.7314 6.5018 20.248 6.5018V4.05284L16.1234 4.87775V9.93895C16.1234 11.0775 14.8904 12.0012 13.3737 12.0012C11.8571 12.0012 10.624 11.0775 10.624 9.93895C10.624 8.80039 11.8571 7.87666 13.3737 7.87666V3.75209C13.3737 3.09474 13.8377 2.5319 14.4779 2.40301L21.3522 1.02815C21.756 0.946522 22.1728 1.05393 22.495 1.31172V1.31601ZM4.20943 14.0635L4.71641 13.2988C4.9699 12.9164 5.39954 12.6887 5.85926 12.6887H8.51016C8.96988 12.6887 9.39952 12.9164 9.65301 13.2988L10.1643 14.0635H11.3114C12.45 14.0635 13.3737 14.9873 13.3737 16.1258V20.9378C13.3737 22.0764 12.45 23.0001 11.3114 23.0001H3.06229C1.92373 23.0001 1 22.0764 1 20.9378V16.1258C1 14.9873 1.92373 14.0635 3.06229 14.0635H4.20943ZM9.24914 18.5318C9.24914 17.9849 9.03187 17.4603 8.64511 17.0735C8.25836 16.6868 7.73381 16.4695 7.18686 16.4695C6.63991 16.4695 6.11535 16.6868 5.7286 17.0735C5.34185 17.4603 5.12457 17.9849 5.12457 18.5318C5.12457 19.0788 5.34185 19.6033 5.7286 19.9901C6.11535 20.3768 6.63991 20.5941 7.18686 20.5941C7.73381 20.5941 8.25836 20.3768 8.64511 19.9901C9.03187 19.6033 9.24914 19.0788 9.24914 18.5318ZM21.567 12.9593L19.9172 16.8132H22.3103C22.5981 16.8132 22.8516 16.9894 22.9548 17.2601C23.0579 17.5307 22.9805 17.8315 22.7657 18.0205L17.2663 22.8325C17.0257 23.0431 16.6691 23.0602 16.4113 22.8712C16.1535 22.6822 16.059 22.3384 16.1836 22.0463L17.8291 18.1881H15.436C15.1481 18.1881 14.8947 18.0119 14.7915 17.7413C14.6884 17.4706 14.7658 17.1698 14.9806 16.9808L20.48 12.1688C20.7206 11.9583 21.0772 11.9411 21.335 12.1301C21.5928 12.3192 21.6873 12.6629 21.5627 12.955L21.567 12.9593ZM7.00211 10.4159C6.72284 10.6951 6.27172 10.6951 6.01393 10.4159L1.85499 6.12372C0.651989 4.87775 0.716436 2.81976 2.06981 1.65973C3.22985 0.650068 5.00857 0.843407 6.08268 1.939L6.51232 2.39012L6.92048 1.939C7.99459 0.843407 9.75183 0.650068 10.9548 1.65973C12.2867 2.81976 12.3512 4.87775 11.1482 6.12372L7.00641 10.4159H7.00211Z" fill="black"/></svg>`,
    category: "Basic",
    content: `
    <span 
      data-gjs-type="materialIcons" 
      class="material-icons material-symbols-outlined"
      style="font-variation-settings: 'FILL' var(--fill), 'wght' var(--weight), 'GRAD' var(--grade), 'opsz' var(--opticalsize);"
    >
      home
    </span>`,
  });

  IconPickerPopupType(editor);

  /* fix modal theming */
  const openIconPickerCmd = editor.Commands.get("open:icon-picker");
  if (!openIconPickerCmd) return;
  const openIconPickerRun = openIconPickerCmd.run!;
  editor.Commands.extend("open:icon-picker", {
    run(editor, _, opts) {
      openIconPickerRun.call(this, editor, _, opts);
      const pickerEl =
        document.querySelector<HTMLElement>("#googleIconPicker")!;
      const pickerElClose = document.querySelector<HTMLElement>(
        ".googleIconPicker__close",
      );
      const pickerElFilters = document.querySelector<HTMLElement>(
        ".googleIconPicker__filterBar",
      )!;
      const pickerElIcons = document.querySelector<HTMLElement>(
        ".googleIconPicker__icons",
      )!;
      const pickerElContent = document.querySelector<HTMLElement>(
        ".googleIconPicker__content",
      )!;
      pickerElContent.className = "";
      pickerElFilters.style.fontSize = "12px";
      pickerElIcons.style.cssText =
        "height: 60dvh; --gjs-secondary-color: initial;";
      pickerElClose?.remove();
      editor.Modal.open({
        title: "Icon Picker",
        content: pickerElContent,
      });
      pickerEl.remove();
    },
    close() {
      editor.Modal.close();
    },
  });
  /* fix modal theming */
};

export default grapesjsGoogleMaterialIconsPluginModified;
