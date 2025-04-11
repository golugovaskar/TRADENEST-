import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-5 text-center border-top">
        {/* Left Section - Brokerage Calculator Info */}
        <div className="col-12 col-md-8 p-3 p-md-5">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 pb-3">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2", fontSize: "16px" }}
            className="text-muted"
          >
            <li>
              Call & trade and RMS auto square-off: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical copies of contract notes, if required, will be charged
              ₹20 per note. Courier charges apply.
            </li>
            <li>
              For NRI accounts (non-PIS), 0.5% or ₹100 per executed equity order
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* Right Section - List of Charges */}
        <div className="col-12 col-md-4 p-3 p-md-5">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
