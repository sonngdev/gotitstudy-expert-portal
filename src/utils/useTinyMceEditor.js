import { useEffect } from 'react';
import tinymce from 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import './latex';
import './wolfram';

export function useTinyMceEditor(id, onChange, config) {
  useEffect(() => {
    let editor;

    tinymce.init({
      selector: `#${id}`,
      skin_url: `${process.env.PUBLIC_URL}/skins/ui/oxide`,
      menubar: false,
      branding: false,
      external_plugins: {
        tiny_mce_wiris: 'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js',
      },
      plugins: 'link lists wolfram latex',
      toolbar: 'bold italic underline strikethrough bullist numlist link wolfram tiny_mce_wiris_formulaEditor latex',
      setup: (ed) => {
        editor = ed;
        ed.on('keyup change', onChange);
      },
      ...config,
    });

    return () => tinymce.remove(editor);
  }, []);
}
