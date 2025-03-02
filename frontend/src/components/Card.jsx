import React from 'react';
import { FaStar } from "react-icons/fa";

function Card({ imgUrl,productName = "Product Name123456789", rating = 2 }) {
  return (
    <div className='md:w-[20%] sm:w-[40%] h-[300px] w-full bg-white rounded-md md:p-4 sm:p-2 shadow-lg md:m-4 my-2' >
      {/* Image Section */}
      <div className='h-[80%] w-full bg-gray-200 rounded-md overflow-hidden'>
        <img 
          src={imgUrl} 
          alt="Product" 
          className='w-full h-full object-cover rounded-md' 
        />
      </div>

      {/* Product Details */}
      <div className='h-[20%] w-full flex justify-between items-center mt-2'>
        {/* Product Name */}
        <div className='flex items-center w-[70%] px-2 py-1 h-full'>
          <h1 
            className='text-lg font-semibold text-black truncate w-full' 
            title={productName} // Show full text on hover
          >
            {productName}
          </h1>
        </div>

        {/* Rating Section */}
        <div className='w-[30%] h-full flex justify-center items-center gap-1 px-2'>
          {[...Array(5)].map((_, index) => (
            <FaStar 
              key={index} 
              className={`text-md ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
