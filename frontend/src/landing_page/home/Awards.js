import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest stock broker in India"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/* Text & List Section */}
        <div className="col-12 col-md-6 p-3 mt-3">
          <h2 className="fw-bold">Largest Stock Broker in India</h2>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Futures and Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Stocks & Equity</p></li>
                <li><p>Mutual Funds</p></li>
                <li><p>Government Bonds</p></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-md-start mt-4">
            <img
              src="media/images/pressLogos.png"
              className="img-fluid"
              alt="Press logos"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
