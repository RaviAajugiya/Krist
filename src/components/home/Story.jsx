import React from 'react';
import st1 from './../../assets/story1.jpeg';
import st2 from './../../assets/story2.png';
import st3 from './../../assets/signIn.png';
import st4 from './../../assets/login.png';
import { CiInstagram } from 'react-icons/ci';

function Story() {
  const images = [st1, st2, st3, st4];

  return (
    <div  id='our-story'>
      <h1 className="text-3xl font-semibold text-center mt-16">Our Instagram Stories</h1>
      <div className="flex justify-between mt-8 pb-16">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img src={img} alt="" className="object-cover w-72 h-72 rounded-lg shadow-lg transition-transform transform-gpu group-hover:scale-110" />
            <div className=" cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-fit rounded-lg inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 bg-white group-hover:opacity-100">
              <CiInstagram className=" text-5xl text-gray-900"  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
