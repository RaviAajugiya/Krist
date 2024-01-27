import React from "react";

const FormField = ({ type, label, name, value, onChange, options }) => {
  switch (type) {
    case "text":
      return (
        <div className="flex flex-col">
          <label className="text-base mb-2">{label}</label>
          <input
            className="h-14 p-4 border-[1px] border-primary-color rounded-[0.625rem]"
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
