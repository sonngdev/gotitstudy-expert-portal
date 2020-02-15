import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { weakRandomString, useTinyMceEditor } from '../../../utils';

/**
 * Custom tinymce React component:
 * https://www.tiny.cloud/blog/how-to-integrate-react-with-tinymce/
 */
export function TinyEditor({ id, onChange }) {
  const [input, setInput] = useState('');
  const bindAndCall = (value) => {
    setInput(value);
    onChange(value);
  };

  useTinyMceEditor(id, bindAndCall);

  return (
    <textarea id={id} value={input} onChange={(e) => bindAndCall(e.target.value)} />
  );
}

TinyEditor.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

TinyEditor.defaultProps = {
  id: `tinymce-${weakRandomString(5)}`,
  onChange: () => {},
};
