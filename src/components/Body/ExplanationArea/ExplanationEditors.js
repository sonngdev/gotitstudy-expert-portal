import React from 'react';
import { TinyEditor } from './TinyEditor';
import './styles/ExplanationEditors.css';

export function ExplanationEditors() {
  return (
    <div className="explanation-editors u-paddingRightSmall">
      <h5>Theory or Concept</h5>
      <TinyEditor id="concept-editor" />

      <h5 className="u-marginTopLarge">Step By Step Instructions</h5>
      <TinyEditor id="instructions-editor" />

      <h5 className="u-marginTopLarge">Final Answer</h5>
      <TinyEditor id="answer-editor" />
    </div>
  );
}
