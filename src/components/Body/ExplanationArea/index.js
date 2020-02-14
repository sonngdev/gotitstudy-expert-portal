import React from 'react';
import { ExplanationEditors } from './ExplanationEditors';

export function ExplanationArea() {
  return (
    <div className="explanation-area">
      <h3 className="u-textCapitalize u-marginBottomTiny">Problem explanation</h3>
      <p className="u-opacityHalf">Complete all 3 sections before submitting your explanation</p>

      <ExplanationEditors />
    </div>
  );
}
