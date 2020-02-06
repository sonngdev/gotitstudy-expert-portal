import React, { useEffect, useState } from 'react';
import tinymce from 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/tiny_mce_wiris';

/**
 * Custom tinymce React component:
 * https://www.tiny.cloud/blog/how-to-integrate-react-with-tinymce/
 */
export function TinyEditor({ id, onChange }) {
  const [editor, setEditor] = useState(null);
  const [input, setInput] = useState('');
  const bindAndCall = (value) => {
    setInput(value);
    onChange(value);
  };

  useEffect(() => {
    tinymce.init({
      selector: `#${id}`,
      /**
       * Convenience aside, the `auto_focus` attribute is required to avoid a
       * Mathtype bug: if user tries to insert a formula when the editor has
       * not been focused (once is enough), an error is thrown.
       */
      auto_focus: id,
      skin_url: `${process.env.PUBLIC_URL}/skins/ui/oxide`,
      menubar: false,
      branding: false,
      plugins: 'link lists tiny_mce_wiris',
      toolbar: 'bold italic underline strikethrough bullist numlist link tiny_mce_wiris_formulaEditor',
      setup: (ed) => {
        setEditor(ed);
        ed.on('keyup change', () => bindAndCall(ed.getContent()));
      },
    });

    return () => tinymce.remove(editor);
  }, []);

  return (
    <textarea id={id} value={input} onChange={(e) => bindAndCall(e.target.value)} />
  );
}
