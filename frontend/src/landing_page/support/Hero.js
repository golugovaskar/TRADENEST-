import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <section
      className="container-fluid text-white py-5 px-3 px-md-5"
      style={{ backgroundColor: "rgb(56, 126, 209)" }}
    >
      {/* Top Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
        <h4 className="mb-2 mb-md-0">Support Portal</h4>
        <a
          href="#"
          style={{
            textDecoration: "underline",
            color: "white",
            fontSize: "16px",
          }}
        >
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="row mt-4">
        {/* Search Section */}
        <div className="col-12 col-md-6 p-2">
          <h1 className="fs-5 fs-md-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
          />

          {/* Links */}
          <div className="mt-3 d-flex flex-wrap gap-2">
            <a href="#" className="text-white text-decoration-underline me-3">
              Track account opening
            </a>
            <a href="#" className="text-white text-decoration-underline me-3">
              Track segment activation
            </a>
            <a href="#" className="text-white text-decoration-underline me-3">
              Intraday margins
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Featured Section */}
        <div className="col-12 col-md-6 p-2 mt-4 mt-md-0">
          <h1 className="fs-5 fs-md-3">Featured</h1>
          <ol className="mt-3 ps-3">
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-underline">
                Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Adjustment of Futures and Options contracts of SIEMENS
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
