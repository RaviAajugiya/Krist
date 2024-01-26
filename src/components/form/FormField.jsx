import React from "react";

const FormField = ({ type, label, name, value, onChange, options }) => {
  switch (type) {
    case "text":
      return (
        <div className="flex flex-col">
          <label className="block text-base font-medium leading-6 text-secondary-text">
            {label}
          </label>
          <input
            className="p-2 mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm outline-none bg-lightbg ring-1 focus:ring-2 focus:ring-primary "
            type="text"
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    case "dropdown":
      return (
        <div>
          <label>{label}</label>
          <select name={name} value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      break;
  }
};

export default FormField;
