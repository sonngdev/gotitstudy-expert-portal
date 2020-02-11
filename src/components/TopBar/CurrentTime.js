import React, { useState, useEffect } from 'react';
import { Icon } from '@gotitinc/design-system';
import { getCurrentTime, formatCurrentTime } from '../../utils';

export function CurrentTime() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time u-text200 u-paddingBottomTiny">
      <Icon name="calendar" size="extraSmall" className="u-marginRightTiny" />
      {formatCurrentTime(time)}
    </div>
  );
}
