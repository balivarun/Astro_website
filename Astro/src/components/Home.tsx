
import React from 'react';

const Home = () => {

  return (
    <div className='bg-orange-200 h-screen flex
      flex-col items-center justify-center text-center bg-cover bg-center relative' style={{ backgroundImage: `url('/images/background3.webp')`, backgroundSize: 'cover' }}>
       <div className="absolute inset-0 bg-white opacity-40"></div>
       <div className='text-2xl font-semibold -translate-y-65 ' style={{ color: "#FF0000" }}>
        ।। ॐ नमो भगवते वासुदेवाय नम: ।।
      </div>
      <div className=" text-7xl font-extrabold -translate-y-100" style={{ color: "#FF5F15" }}>
        Rahul Bali Astrology
      </div>
     <div className='relative z-10 flex flex-row gap-70 -translate-y-55'>
     <a href='#home' className='text-2xl font-medium text-black hover:text-gray-700' style={{ textDecoration: 'none' }}>Home</a>
      <a href='#review' className='text-2xl font-medium text-black hover:text-gray-700' style={{ textDecoration: 'none' }}>Review</a>
      <a href='#donation' className='text-2xl font-medium text-black hover:text-gray-700' style={{ textDecoration: 'none' }}>Donation</a>
      <a href='#about' className='text-2xl font-medium text-black hover:text-gray-700' style={{ textDecoration: 'none' }}>About</a>
    </div>
    <div className='flex flex-col items-center justify-center gap-4 -translate-y-40'>
      <button className='bg-[#FFAC1C] hover:bg-[#FF5F15] text-black text-xl py-4 px-5 rounded-5 font-bold'>Book a Consultation</button>
    </div>
    </div>
  );
};

export default Home;