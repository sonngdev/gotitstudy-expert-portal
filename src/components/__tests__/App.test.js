import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('<App />', () => {
  let wrapper;
  let container;

  beforeEach(() => {
    wrapper = shallow(<App />);
    container = wrapper.find('.container-app');
  });

  it('renders', () => {
    const r = () => shallow(<App />);
    expect(r).not.toThrow();
  });

  it('contains a TopBar', () => {
    const topbar = wrapper.find('TopBar');
    expect(topbar.exists()).toBe(true);
  });

  it('contains a container for main content', () => {
    expect(container.exists()).toBe(true);
  });

  it('has a ChatArea in its container', () => {
    const chat = container.find('ChatArea');
    expect(chat.exists()).toBe(true);
  });

  it('has a ExplanationArea in its container', () => {
    const explanation = container.find('ExplanationArea');
    expect(explanation.exists()).toBe(true);
  });
});
