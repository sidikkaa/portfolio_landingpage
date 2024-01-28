import React from 'react';
import sid4 from "./sid4.jpeg";
import "./index.css";
import indianflag from "./indianflag.jpg";

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='text-white'>
        <p className="text-white text-[13px]">Hello there, welcome to my site</p>
        <p className='text-white text-[40px] font-bold'>I am Sidikkaa</p>
        <p className='text-red-500 text-[40px] font-bold'>I am a full stack developer</p>
        <p className='text-white hover:text-[13px]  text-[7px] '>Aspiring computer programmer with proven problem skills. Having strong knowledge of developing websites. I am organised, efficient and hardworking person.</p>
        <div className='form-container mt-2 p-4 rounded-md w-15 bg-gradient-to-r from-pink-400 via-white to-violet-800'>
  <p>
    <span className='text-white text-[15px]'>Projects:</span>
    <span className='text-black text-[15px] animatedText'>chat room app</span><br/>
    <span className='text-white text-[15px]'>Description:</span>
    <span className='text-red-800 text-[15px] animatedText'>user friendly, where communication makes easier</span>
  </p>
</div>

        <div className='mt-4 flex gap-4'>
          <button className='text-black border-red-500 rounded-full text-[15px] px-3 py-1 cursor-pointer bg-gradient-to-r from-gray-500 to-red-200 hover:border-[2px] border-white'>Download resume</button>
          <button className='text-black border-red-500 rounded-full text-[15px] px-3 py-1 cursor-pointer bg-gradient-to-r from-gray-500 to-red-200 hover:border-[2px] border-white'>Contact me</button>
        </div>
      </div>

      <div className='h-[350px] w-[250px] ml-20 p-2 rounded-[20px] bg-gradient-to-b from-black to-red-700 overflow-hidden'>
  <img src={sid4} alt="profile" className='h-full w-full object-cover rounded-[20px]' />
</div>


      
      <div className="flex justify-center items-center flex-col mt-20">
        <div className="flex items-center space-x-2">
          <img src={indianflag} alt="Indian Flag" className="h-7 w-auto rounded-full text-center" />
          <span className="text-white text-lg cursor-pointer">Happy Republic Day!</span>
        </div>
        <div>
          <p className='justify-center text-center text-[20px] text-pink-700'>Ask not what your country can do for you. Ask what you can do for your country</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;


