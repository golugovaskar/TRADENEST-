import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#e9ecef" }}> 
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img
              src="media/images/Screenshot 2025-04-07 163906.png"
              alt="Logo"
              style={{ width: "70%", maxWidth: "200px" }}
              className="mb-3"
            />
            <p>&copy; 2010 - 2025, TRADENEST Broking Ltd.</p>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <p className="fw-semibold">Company</p>
            {[
              "About",
              "Products",
              "Pricing",
              "Referral programme",
              "Carrers",
              "Zerodha.tech",
              "Press & media",
              "Zerodha cares (CSR)",
            ].map((text, i) => (
              <a
                key={i}
                href="#"
                className="text-decoration-none footer-link d-block mb-1"
              >
                {text}
              </a>
            ))}
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <p className="fw-semibold">Support</p>
            {[
              "Contact",
              "Support portal",
              "z-connect blog",
              "List of charges",
              "Downloads & resources",
            ].map((text, i) => (
              <a
                key={i}
                href="#"
                className="text-decoration-none footer-link d-block mb-1"
              >
                {text}
              </a>
            ))}
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <p className="fw-semibold">Account</p>
            {["Open an account", "Funds transfer", "60 day challenge"].map(
              (text, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-decoration-none footer-link d-block mb-1"
                >
                  {text}
                </a>
              )
            )}
          </div>
        </div>

        {/* Legal and Info Section */}
        <div className="mt-4 text-muted small" style={{ fontSize: "14px" }}>
          <p>
            TRADENEST Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
            Registration no.: INZ000031633...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal...
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism...
          </p>
          <p>
            "Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs...
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
            {[
              "NSE",
              "BSE",
              "MCX",
              "Terms & procedures",
              "Privacy policy",
              "Disclosure",
              "For investors",
            ].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-decoration-none footer-link mx-2"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
