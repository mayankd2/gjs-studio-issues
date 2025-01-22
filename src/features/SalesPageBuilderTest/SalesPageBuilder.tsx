import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';

function SalesPageBuilder() {
  return (
    <StudioEditor
    options={{
      licenseKey: "LICENSE_KEY",
      gjsOptions: { storageManager: false },
      project: {
        default: {
          pages: [
            {
              name: 'Home',
              component: `<h1>Custom component</h1>`,
            },
          ],
        },
      },
      plugins: [
        {
          id: 'gjs-google-material-icons',
          src: 'https://unpkg.com/grapesjs-google-material-icons',
        },
        (editor) => {
          const openIconPickerCmd =
            editor.Commands.get('open:icon-picker');
          if (!openIconPickerCmd) return;
          const openIconPickerRun = openIconPickerCmd.run!;
          editor.Commands.extend('open:icon-picker', {
            run(editor, _, opts) {
              openIconPickerRun.call(this, editor, _, opts);
              const pickerEl =
                document.querySelector<HTMLElement>('#googleIconPicker')!;
              const pickerElClose = document.querySelector<HTMLElement>(
                '.googleIconPicker__close'
              );
              const pickerElFilters = document.querySelector<HTMLElement>(
                '.googleIconPicker__filterBar'
              )!;
              const pickerElIcons = document.querySelector<HTMLElement>(
                '.googleIconPicker__icons'
              )!;
              const pickerElContent = document.querySelector<HTMLElement>(
                '.googleIconPicker__content'
              )!;
              pickerElContent.className = '';
              pickerElFilters.style.fontSize = '12px';
              pickerElIcons.style.cssText =
                'height: 60dvh; --gjs-secondary-color: initial;';
              pickerElClose?.remove();
              editor.Modal.open({
                title: 'Icon Picker',
                content: pickerElContent,
              });
              pickerEl.remove();
            },
            close() {
              editor.Modal.close();
            },
          });
        },
      ],
    }}
  />
  );
}

export default SalesPageBuilder;
