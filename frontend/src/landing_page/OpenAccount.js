import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); // Redirect to signup route
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h1 className="mt-5">Open a Tradenest account</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary fs-5 mt-3"
            style={{ padding: "12px 30px" }}
            onClick={handleSignupClick}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
