/* eslint-disable react/forbid-prop-types */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { weakRandomString, useTinyMceEditor } from '../../../utils';

/**
 * Custom tinymce React component:
 * https://www.tiny.cloud/blog/how-to-integrate-react-with-tinymce/
 */
export function TinyEditor({ id, value, onChange, config }) {
  const [input, setInput] = useState(value);
  const bindAndCall = (e) => {
    setInput(e.target.value);
    onChange(e);
  };

  useTinyMceEditor(id, bindAndCall, config);

  return (
    /**
     * Technically, `value` and `onChange` props are
     * unnecessary here. However, having `value` is
     * very useful in testing, and we can't have it
     * without `onChange`, else eslint (or something)
     * will complain. Change handler would be called
     * only once anyway, so there is no harm in
     * including it.
     */
    <textarea id={id} value={input} onChange={bindAndCall} />
  );
}

TinyEditor.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.object,
};

TinyEditor.defaultProps = {
  id: `tinymce-${weakRandomString(5)}`,
  value: '',
  onChange: () => {},
  config: {},
};
