import React from 'react';
import { TinyEditor } from './TinyEditor';
import './styles/index.css';

export function ExplanationArea() {
  return (
    <div className="explanation-area">
      <h3 className="u-textCapitalize u-marginBottomTiny">Problem explanation</h3>
      <p className="u-opacityHalf">Complete all 3 sections before submitting your explanation</p>

      <div className="explanation-editors u-paddingRightSmall">
        <h5>Theory or Concept</h5>
        <TinyEditor id="concept-editor" />

        <h5 className="u-marginTopLarge">Step By Step Instructions</h5>
        <TinyEditor id="instructions-editor" />

        <h5 className="u-marginTopLarge">Final Answer</h5>
        <TinyEditor id="answer-editor" />
      </div>
    </div>
  );
}
