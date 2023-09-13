import React from 'react';

const ViewCouponCard = ({discount,handleDeleteDiscountCard}) => {
    return (
        <div
            className="w-full p-3 shadow-lg rounded-lg border flex gap-3 items-center justify-between"
            
          >
            <span title="discount code" className="text-sm font-semibold">{discount?.code}</span>
            <div className="w-1/2 flex justify-between">
              <span title="discount percent" className="text-green-500">{discount?.discount * 100}%</span>
              <button onClick={() => handleDeleteDiscountCard(discount)} title="delete" className="text-red-400 px-2 hover:bg-red-100 rounded-full duration-700 ">x</button>
            </div>
          </div>
    );
};

export default ViewCouponCard;