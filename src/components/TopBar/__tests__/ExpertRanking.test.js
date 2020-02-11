import React from 'react';
import { shallow } from 'enzyme';
import { ExpertRanking } from '../ExpertRanking';

describe('<ExpertRanking />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpertRanking />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains static ranking for now', () => {
    const ranking = wrapper.find('.stat');
    expect(ranking.text()).toBe('0');
  });
});
