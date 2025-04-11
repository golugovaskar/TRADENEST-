import React from 'react';

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-4 p-md-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">
          Free equity investments and flat ₹20 intraday & F&O trades
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="row p-3 p-md-5 mt-4 text-center">
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Free equity delivery" style={{ width: '60%' }} />
          <h2 className="fs-4 mt-3">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday and F&O trades" style={{ width: '60%' }} />
          <h2 className="fs-4 mt-3">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodity. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Free direct mutual funds" style={{ width: '60%' }} />
          <h2 className="fs-4 mt-3">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
