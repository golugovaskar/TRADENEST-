import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1 >Tradenest Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5 fs-5">
          Check out our{" "}
          <a
            href="#"
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
            className="text-primary"
          >
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
