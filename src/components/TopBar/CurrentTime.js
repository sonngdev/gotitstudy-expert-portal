import React, { useState, useEffect } from 'react';
import { Icon } from '@gotitinc/design-system';
import { formatCurrentTime } from '../../helpers';

export function CurrentTime() {
  const [time, setTime] = useState(formatCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(formatCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time u-text200 u-paddingBottomTiny">
      <Icon name="calendar" size="extraSmall" className="u-marginRightTiny" />
      {time}
    </div>
  );
}
