import React from 'react';
import { FaCcPaypal, FaCcStripe, FaCcVisa, } from "react-icons/fa";


const IconPage = () => {
    return (
        <div className='flex gap-4'>
            <input type="radio" name="radio-7" className="radio radio-info" />
            <FaCcPaypal className='w-[50px] h-[50px] '/>
            <FaCcStripe className='w-[50px] h-[50px]'/>
            <FaCcVisa className='w-[50px] h-[50px]'/>
            
            
        </div>
    );
};

export default IconPage;