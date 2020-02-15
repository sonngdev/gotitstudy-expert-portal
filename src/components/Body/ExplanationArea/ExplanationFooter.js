import React from 'react';
import PropTypes from 'prop-types';
import { EndSessionButton } from './EndSessionButton';
import { FlagSessionButton } from './FlagSessionButton';
import { ExplanationPreviewButton } from './ExplanationPreviewButton';
import './styles/ExplanationFooter.css';

export function ExplanationFooter({ explanations }) {
  return (
    <div className="explanation-footer u-flex u-justifyContentBetween u-paddingRightSmall">
      <div>
        <EndSessionButton className="u-marginRightSmall" />
        <FlagSessionButton />
      </div>

      <ExplanationPreviewButton explanations={explanations} />
    </div>
  );
}

ExplanationFooter.propTypes = {
  explanations: PropTypes.arrayOf(PropTypes.string),
};

ExplanationFooter.defaultProps = {
  explanations: ['', '', ''],
};
