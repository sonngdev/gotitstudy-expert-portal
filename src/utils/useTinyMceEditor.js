import { useEffect, useState } from 'react';
import tinymce from 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import '@wiris/mathtype-tinymce5';
import './latex';
import './wolfram';

export function useTinyMceEditor(id, onChange) {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    tinymce.init({
      selector: `#${id}`,
      skin_url: `${process.env.PUBLIC_URL}/skins/ui/oxide`,
      menubar: false,
      branding: false,
      plugins: 'link lists wolfram tiny_mce_wiris latex',
      toolbar: 'bold italic underline strikethrough bullist numlist link wolfram tiny_mce_wiris_formulaEditor latex',
      setup: (ed) => {
        setEditor(ed);
        ed.on('keyup change', () => onChange(ed.getContent()));
      },
    });

    return () => tinymce.remove(editor);
  }, []);
}
