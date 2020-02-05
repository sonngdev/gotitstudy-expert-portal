import { useEffect } from 'react';

export function useScrollToBottom(selector) {
  useEffect(() => {
    const listWindow = document.querySelector(selector);
    listWindow.scrollTop = listWindow.scrollHeight - listWindow.clientHeight;
  });
}
