import React from "react";

function Button({ children, type, className, ...props }) {
  return (
    <button
      type={type}
      className={`bg-primary-color text-white p-2 rounded-[0.625rem] text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
