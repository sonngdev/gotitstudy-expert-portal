import React from 'react';
import { TopMenu, Logo } from '@gotitinc/design-system';
import { ExpertRanking } from './ExpertRanking';
import { WorkingStats } from './WorkingStats';
import { CurrentTime } from './CurrentTime';
import { StopWorkingButton } from './StopWorkingButton';
import { SessionTimer } from './SessionTimer';
import './styles/TopBar.css';

export function TopBar() {
	return (
		<TopMenu className="u-backgroundPrimary u-paddingVerticalTiny u-paddingHorizontalMedium u-textWhite">
			<Logo name="gotit" variant="white" />

			<ExpertRanking />

			<WorkingStats />

			<SessionTimer />

			<div>
				<CurrentTime />
				<StopWorkingButton />
			</div>
		</TopMenu>
	);
}
