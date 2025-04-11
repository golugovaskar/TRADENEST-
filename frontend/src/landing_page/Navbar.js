import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom shadow-sm" style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/Screenshot 2025-04-07 163906.png"
            alt="Logo"
            style={{ width: "160px", height: "auto" }}
          />
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Product", path: "/product" },
              { label: "Pricing", path: "/pricing" },
              { label: "Support", path: "/support" },
              { label: "Signup", path: "/signup" },
              { label: "Login", path: "/Login" },
              
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={item.path}
                  className="nav-link mx-2 text-dark fw-medium nav-link-hover"
                  style={{
                    fontSize: "1.05rem",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover styles injected via inline style tag (can move to CSS file) */}
      <style>
        {`
          .nav-link-hover:hover {
            color: #0d6efd !important;
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
