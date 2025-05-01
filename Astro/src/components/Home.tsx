
import React from 'react';

const Home = () => {

  return (
    <div className='bg-orange-200 h-screen flex
      flex-col items-center justify-center text-center bg-cover bg-center relative' style={{ backgroundImage: `url('/images/background3.webp')`, backgroundSize: 'cover' }}>
       <div className="absolute inset-0 bg-white opacity-40"></div>
       <div className='text-2xl font-semibold -translate-y-65 ' style={{ color: "#8B4000" }}>
        ।। ॐ नमो भगवते वासुदेवाय नम: ।।
      </div>
      <div className=" text-7xl font-extrabold -translate-y-100" style={{ color: "#FF5F15" }}>
        Rahul Bali Astrology
      </div>
     <div>
      v
     </div>
    </div>
  );
};

export default Home;