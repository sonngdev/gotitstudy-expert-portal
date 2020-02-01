import React from 'react';
import { shallow } from 'enzyme';
import { WorkingStats } from './WorkingStats';

describe('<WorkingStats />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WorkingStats />);
  });

  it('renders', () => {
    const r = () => shallow(<WorkingStats />);
    expect(r).not.toThrow();
  });

  it('has static avg bid price for now', () => {
    const avgBidPrice = wrapper.find('.avg-bid-price .stat').text();
    expect(avgBidPrice).toBe('0');
  })

  it('has static winning bids for now', () => {
    const winningBids = wrapper.find('.winning-bids .stat').text();
    expect(winningBids).toBe('0');
  })

  it('has static customer rating for now', () => {
    const customerRating = wrapper.find('.customer-rating .stat').text();
    expect(customerRating).toBe('0');
  })

  it('has static earned credits for now', () => {
    const earnedCredits = wrapper.find('.earned-credits .stat').text();
    expect(earnedCredits).toBe('0');
  })
});
