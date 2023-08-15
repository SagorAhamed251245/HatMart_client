import React from 'react';
import './Checkout.css'

const CheckoutForm = () => {
    return (
        <>
           <div className="max-w-2xl mx-auto">

<form>
<div className="grid xl:grid-cols-2 xl:gap-6">
  <div className="relative z-0 mb-6 w-full group">
      <input  className="block py-2.5 px-0 w-full " placeholder=" First Name" required />
      </div>
 <div className="relative z-0 mb-6 w-full group">
      <input  className="block py-2.5 px-0 w-full " placeholder=" Last Name" required />
      
    </div>
</div>


<div className="grid xl:grid-cols-2 xl:gap-6">
   <div className="relative z-0 mb-6 w-full group">
      <input  className="block py-2.5 px-0 w-full " placeholder="Phone number (123-456-7890) " required />
      
    </div>
    <div className="relative z-0 mb-6 w-full group">
      <input className="block py-2.5 px-0 w-full" placeholder="Company (Ex. Google) " required />
      
    </div>
  </div>   


  <div className="relative z-0 mb-6 w-full group">
    <input type="email" className="block py-2.5 px-0 w-full " placeholder="email " required />
    <label  className="absolute text-sm ">Email address</label>
  </div>
 <div className="relative z-0 mb-6 w-full group">
    <input type="email" className="block py-2.5 px-0 w-full " placeholder="email " required />
    <label  className="absolute text-sm ">Email address</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
    <input type="email" className="block py-2.5 px-0 w-full " placeholder="email " required />
    <label  className="absolute text-sm ">Email address</label>
  </div>
  
   
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

<p claclassNamess="mt-5">Check out the original floating label form elements on  and browse other similar components built with Tailwind CSS.
</p>
</div>
        </>
    );
};

export default CheckoutForm;