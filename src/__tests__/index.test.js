/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { App } from '../components/App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('wraps <Provider /> around the app for redux', () => {
    require('../index.js');
    expect(ReactDOM.render.mock.calls[0][0])
      .toMatchObject(<Provider store={store}><App /></Provider>);
  });
});
