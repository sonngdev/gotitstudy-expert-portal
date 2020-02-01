import React from 'react';

export function WorkingStats() {
  return (
    <div className="working-stats u-textUppercase u-text100 u-textCenter">
      Current working stats

      <div className="u-flex">
        <div className="avg-bid-price u-marginHorizontalExtraSmall">
          <div className="u-opacityHalf u-textCapitalize">Avg. bid price</div>
          <div className="stat u-text400">0</div>
        </div>

        <div className="winning-bids u-marginHorizontalExtraSmall">
          <div className="u-opacityHalf u-textCapitalize">Winning bids</div>
          <div className="stat u-text400">0</div>
        </div>

        <div className="customer-rating u-marginHorizontalExtraSmall">
          <div className="u-opacityHalf u-textCapitalize">Customer ratings</div>
          <span className="stat u-text400">0</span>
          <span className="u-opacityHalf"> / 5</span>
        </div>

        <div className="earned-credits u-marginHorizontalExtraSmall">
          <div className="u-opacityHalf u-textCapitalize">Earned credits</div>
          <div className="stat u-text400">0</div>
        </div>
      </div>
    </div>
  )
}
