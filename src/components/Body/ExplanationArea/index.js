import React from 'react';
import { TinyEditor } from './TinyEditor';

export function ExplanationArea() {
  return (
    <div className="explanation-area">
      <h3 className="u-textCapitalize u-marginBottomTiny">Problem explanation</h3>
      <p className="u-opacityHalf">Complete all 3 sections before submitting your explanation</p>

      <h5>Theory or Concept</h5>
      <TinyEditor id="tinymce" />
    </div>
  );
}
