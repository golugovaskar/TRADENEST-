import React from "react";

function Universe() {
  const platforms = [
    {
      img: "media/images/smallcaseLogo.png",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.",
    },
    {
      img: "media/images/smallcaseLogo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "media/images/smallcaseLogo.png",
      desc: "Portfolio analytics platform to track your performance.",
    },
    {
      img: "media/images/smallcaseLogo.png",
      desc: "Mutual fund comparison and advisory platform.",
    },
    {
      img: "media/images/smallcaseLogo.png",
      desc: "Investment research and data visualisation platform.",
    },
    {
      img: "media/images/smallcaseLogo.png",
      desc: "API platform to build your own trading apps.",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h1 className="fw-bold">The Zerodha Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms.
          </p>
        </div>

        {platforms.map((item, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center p-3"
            key={index}
          >
            <img
              src={item.img}
              alt="Zerodha partner platform"
              className="img-fluid mb-3"
              style={{ maxHeight: "70px", objectFit: "contain" }}
            />
            <p className="text-muted">{item.desc}</p>
          </div>
        ))}

        <div className="col-12 text-center mt-4 mb-5">
          <button className="btn btn-primary fs-5 px-4 py-2">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
