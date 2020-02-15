import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { weakRandomString, useTinyMceEditor } from '../../../utils';

/**
 * Custom tinymce React component:
 * https://www.tiny.cloud/blog/how-to-integrate-react-with-tinymce/
 */
export function TinyEditor({ id, value, onChange }) {
  const [input, setInput] = useState(value);
  const bindAndCall = (val) => {
    setInput(val);
    onChange(val);
  };

  useTinyMceEditor(id, bindAndCall);

  return (
    <textarea id={id} value={input} onChange={(e) => bindAndCall(e.target.value)} />
  );
}

TinyEditor.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TinyEditor.defaultProps = {
  id: `tinymce-${weakRandomString(5)}`,
  value: '',
  onChange: () => {},
};
