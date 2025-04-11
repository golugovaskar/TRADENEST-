import React from 'react';

function Education() {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>

        {/* Image Section */}
        <div className='col-12 col-md-6 mb-4 mb-md-0 text-center'>
          <img
            src='media/images/education.svg'
            className='img-fluid'
            alt="Education"
            style={{ maxWidth: "80%" }}
          />
        </div>

        {/* Text Section */}
        <div className='col-12 col-md-6'>
          <h2 className='mb-3'>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className='d-block mb-4' style={{ textDecoration: "none" }}>Varsity ➞</a>

          <p>
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>
          <a href="#" className='d-block' style={{ textDecoration: "none" }}>TradingQ&A ➞</a>
        </div>

      </div>
    </div>
  );
}

export default Education;
