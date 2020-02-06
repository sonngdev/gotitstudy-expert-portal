import { useEffect } from 'react';

export function useScrollToBottom(windowRef) {
  useEffect(() => {
    const wndw = windowRef.current;
    wndw.scrollTop = wndw.scrollHeight - wndw.clientHeight;
  });
}
