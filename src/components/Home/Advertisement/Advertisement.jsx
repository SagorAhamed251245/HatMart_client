import React from 'react';

const Advertisement = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"><span className='text-green-600'>Discount For </span><span className='text-orange-400'>Familly pack!</span></h1>
            <p className="mb-5">Here we are providing to you best grocery product. and A easy life all of us wants.
            so we are here giving you best option for your daily life. personal to familly pack. for familly pack here best Discount !</p>
            <button className="btn btn-primary">Get Discount</button>
          </div>
        </div>
      </div>
    );
};

export default Advertisement;