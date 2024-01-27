import React from 'react'

function Service({icon, heading, text, className=''}) {
  return (
    <div className={`w-full px-4 md:w-1/3 ${className}`}>
      <div className="my-10 text-center">
        <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full ">
          {icon}
        </div>
        <div>
          <h3 className="mb-[10px] text-xl font-semibold text-dark  ">
            {heading}
          </h3>
          <p className="max-w-[275px] mx-auto text-[#9CA3AF]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service