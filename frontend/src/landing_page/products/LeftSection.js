import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 mt-4 mt-md-0 text-center text-md-start">
          <h1 className="fw-bold">{productName}</h1>
          <p className="mt-3">{productDescription}</p>

          <div className="mb-4 mt-3">
            <a href={tryDemo} className="me-4 text-decoration-none text-primary fw-semibold">
              Try demo →
            </a>
            <a href={learnMore} className="text-decoration-none text-primary fw-semibold">
              Learn more →
            </a>
          </div>

          <div className="d-flex justify-content-center justify-content-md-start">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a
              href={appStore || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3"
            >
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
