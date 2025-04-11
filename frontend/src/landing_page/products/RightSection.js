import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-3">
          <h2 className="text-center text-md-start">{productName}</h2>
          <p className="text-center text-md-start">{productDescription}</p>
          <div className="d-flex justify-content-center justify-content-md-start mb-4">
            <a
              href={learnMore || "#"}
              className="text-decoration-none"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid w-75"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
