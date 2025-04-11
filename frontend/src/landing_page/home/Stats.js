import React from 'react';

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3 p-md-5">
        {/* Left Column - Text Content */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <div className="mb-4">
            <h2 className="fs-5">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily
              retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High-quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Column - Image & Links */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            style={{ width: '90%', maxWidth: '400px' }}
          />
          <div className="mt-4">
            <a
              href=""
              className="d-block d-md-inline mx-md-4 my-2"
              style={{ textDecoration: 'none' }}
            >
              Explore our products ➞
            </a>
            <a
              href=""
              className="d-block d-md-inline mx-md-4 my-2"
              style={{ textDecoration: 'none' }}
            >
              Try kite demo ➞
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
