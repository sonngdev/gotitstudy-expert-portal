import React from 'react';
import { shallow } from 'enzyme';
import { WorkingStats } from '../WorkingStats';

describe('<WorkingStats />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WorkingStats />);
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('has static avg bid price for now', () => {
    const avgBidPrice = wrapper.find('.avg-bid-price .stat');
    expect(avgBidPrice.text()).toBe('0');
  });

  it('has static winning bids for now', () => {
    const winningBids = wrapper.find('.winning-bids .stat');
    expect(winningBids.text()).toBe('0');
  });

  it('has static customer rating for now', () => {
    const customerRating = wrapper.find('.customer-rating .stat');
    expect(customerRating.text()).toBe('0');
  });

  it('has static earned credits for now', () => {
    const earnedCredits = wrapper.find('.earned-credits .stat');
    expect(earnedCredits.text()).toBe('0');
  });
});
