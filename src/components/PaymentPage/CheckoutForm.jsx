'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import IconPage from './IconPage';


const CheckoutForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="max-w-2xl mx-auto ">
      <IconPage/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              {...register('firstName', { required: true })}
              className="block py-2.5 px-0 w-full"
              placeholder="First Name"
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              {...register('lastName', { required: true })}
              className="block py-2.5 px-0 w-full"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              {...register('phoneNumber', { required: true })}
              className="block py-2.5 px-0 w-full"
              placeholder="Phone number (123-456-7890)"
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              {...register('company', { required: true })}
              className="block py-2.5 px-0 w-full"
              placeholder="Company (Ex. Google)"
            />
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            {...register('email1', { required: true })}
            type="email"
            className="block py-2.5 px-0 w-full "
            placeholder="Email"
          />
          
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            {...register('email2', { required: true })}
            type="email"
            className="block py-2.5 px-0 w-full"
            placeholder="Email"
          />
          
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            {...register('email3', { required: true })}
            type="email"
            className="block py-2.5 px-0 w-full shadow-2xl"
            placeholder="Email"
          />
         
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Payment Here
        </button>
      </form>
      <p className="mt-5">
        
        Check out the original floating label form elements on and browse other
        similar components built with Tailwind CSS.
      </p>
    </div>
  );
};

export default CheckoutForm;
