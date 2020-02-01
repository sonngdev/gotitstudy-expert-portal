import React from 'react';
import { shallow } from 'enzyme';
import { ExpertRanking } from './ExpertRanking';

describe('<ExpertRanking />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpertRanking />);
  });

  it('renders', () => {
    const r = () => shallow(<ExpertRanking />);
    expect(r).not.toThrow();
  })
  it('contains static ranking for now', () => {
    const ranking = wrapper.find('.stat').text();
    expect(ranking).toBe('0');
  });
});
