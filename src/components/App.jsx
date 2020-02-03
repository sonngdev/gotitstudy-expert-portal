import React, { Fragment } from 'react';
import { TopBar } from './TopBar';
import { ChatArea } from './Body/ChatArea';
import { ExplanationArea } from './Body/ExplanationArea';

export function App() {
  return (
    <Fragment>
      <TopBar />

      <div className="container-app">
        <ChatArea />

        <ExplanationArea />
      </div>
    </Fragment>
  );
}
