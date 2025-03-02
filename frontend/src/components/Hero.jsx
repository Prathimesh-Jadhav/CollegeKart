import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-black via-[#2b6a79]  to-black text-white p-64 flex justify-center items-center">
     
      <div className="max-w-lg text-center">
        <h2 className="text-4xl font-bold mb-4">Find the Best Facility Near You</h2>
        <p className="text-lg text-gray-300 mb-6">Explore top-rated hospitals, restaurants, and accommodations near you.</p>
        <button className="bg-[#86F8FE] hover:bg-[#5ac8d8] text-black px-6 py-2 rounded-lg font-semibold">
          Explore Now →
        </button>
      </div>
    </div>
  );
}

export default Hero;
