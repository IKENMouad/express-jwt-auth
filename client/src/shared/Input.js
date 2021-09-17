import React from "react";

const Input = ({ name, type, placeholder }) => {
  return (
    <div className="Input">
      <input
        id={name}
        autocomplete="false"
        required
        type={type}
        placeholder={placeholder}
      />
      <label for={name}></label>
    </div>
  );
};

export default Input;
