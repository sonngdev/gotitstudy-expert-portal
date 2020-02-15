import React from 'react';
import { EndSessionButton } from './EndSessionButton';
import { FlagSessionButton } from './FlagSessionButton';
import { ExplanationPreviewButton } from './ExplanationPreviewButton';
import './styles/ExplanationFooter.css';

export function ExplanationFooter() {
  return (
    <div className="explanation-footer u-flex u-justifyContentBetween u-paddingRightSmall">
      <div>
        <EndSessionButton className="u-marginRightSmall" />
        <FlagSessionButton />
      </div>

      <ExplanationPreviewButton />
    </div>
  );
}
