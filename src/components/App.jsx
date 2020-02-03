import React from 'react';
import { TopBar } from './TopBar';
import { ChatArea } from './Body/ChatArea';
import { ExplanationArea } from './Body/ExplanationArea';

export function App() {
  return (
    <>
      <TopBar />

      <div className="container-app Container u-paddingTopSmall">
        <div className="Grid Grid--smallGutter">
          <div className="u-size1of2">
            <ChatArea />
          </div>

          <div className="u-size1of2">
            <ExplanationArea />
          </div>
        </div>
      </div>
    </>
  );
}
