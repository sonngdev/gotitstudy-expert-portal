import React, { useState, useEffect } from 'react';
import { Icon } from '@gotitinc/design-system';
import { getCstTime } from '../../helpers';

export function CurrentTime() {
  const [time, setTime] = useState(getCstTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getCstTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time">
      <Icon name="calendar" className="u-marginRightTiny" />
      {time}
    </div>
  )
}
