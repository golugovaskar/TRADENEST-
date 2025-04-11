import React from 'react';

function Pricing() {
  return (
    <div className="container mb-5 px-3 px-md-5">
      <div className="row align-items-center gy-5">
        {/* Left Section */}
        <div className="col-12 col-md-4 text-center text-md-start">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: 'none' }}>
            See Pricing ➞
          </a>
        </div>

        {/* Spacer on medium and up */}
        <div className="d-none d-md-block col-md-2"></div>

        {/* Right Section - Pricing Cards */}
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-sm-6 mb-3 mb-sm-0">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹0</h1>
                <p>Free equity delivery and<br /> direct mutual funds</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
