import React, { useState } from 'react';
import { TinyEditor } from './TinyEditor';
import { ExplanationFooter } from './ExplanationFooter';
import './styles/index.css';

export function ExplanationArea() {
  const [conInput, setConInput] = useState('');
  const [insInput, setInsInput] = useState('');
  const [ansInput, setAnsInput] = useState('');

  return (
    <div className="explanation-area">
      <h3 className="u-textCapitalize u-marginBottomTiny">Problem explanation</h3>
      <p className="u-opacityHalf">Complete all 3 sections before submitting your explanation</p>

      <div className="explanation-editors u-paddingRightSmall">
        <h5>Theory or Concept</h5>
        <TinyEditor id="concept-editor" value={conInput} onChange={setConInput} />

        <h5 className="u-marginTopLarge">Step By Step Instructions</h5>
        <TinyEditor id="instructions-editor" value={insInput} onChange={setInsInput} />

        <h5 className="u-marginTopLarge">Final Answer</h5>
        <TinyEditor id="answer-editor" value={ansInput} onChange={setAnsInput} />
      </div>

      <ExplanationFooter explanations={[conInput, insInput, ansInput]} />
    </div>
  );
}
