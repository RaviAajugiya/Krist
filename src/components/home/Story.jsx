import React from "react";
import st1 from "./../../assets/story1.jpeg";
import st2 from "./../../assets/story2.png";
import st3 from "./../../assets/signIn.png";
import st4 from "./../../assets/login.png";
import instagram from "./../../assets/instagram.svg";
import { Link } from "react-router-dom";

function Story() {
  const images = [st1, st2, st3, st4];

  return (
    <div id="our-story">
      <h1 className="text-3xl font-semibold text-center mt-16 ">
        Our Instagram Stories
      </h1>
      <div className="flex justify-evenly mt-8 pb-16 flex-wrap">
        {images.map((img, index) => (
          <div key={index} className="relative group p-5">
            <img
              src={img}
              alt=""
              className="m-auto object-cover w-64 h-64 rounded-lg shadow-lg transition-transform transform-gpu group-hover:scale-110"
            />
            <div
              onClick={() => {}}
              className=" cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-fit rounded-lg inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 bg-white bg-opacity-40 group-hover:opacity-100"
            >
              <Link to="https://www.instagram.com/">
                <img src={instagram} alt="" className="size-12" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
