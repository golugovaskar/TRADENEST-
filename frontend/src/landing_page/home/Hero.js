import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup'); // redirect to signup page
  };

  return (
    <div className='container p-4 p-md-5 mb-5'>
      <div className='row text-center justify-content-center'>
        <div className='col-12'>
          <img
            src='media/images/homeHero.png'
            alt='Hero image'
            className='img-fluid mb-4'
            style={{ maxHeight: '400px' }}
          />
        </div>

        <div className='col-12'>
          <h1 className='mt-4 fs-2 fs-md-1'>Invest in everything</h1>
          <p className='fs-6 mt-2'>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
        </div>

        <div className='col-12'>
          <button
            className='btn btn-primary px-4 py-2 fs-5 mt-3'
            onClick={handleSignupClick}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
