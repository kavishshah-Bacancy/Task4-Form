import React, { useState } from "react";
import PropTypes from "prop-types";

import { validateInput } from "../../Validator/Validator";

const InputField = ({
  value,
  label,
  name,
  placeholder,
  validators,
  type,
  onChange,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    console.log("handleChange", event.target);
    setError(validateInput(validators, event.target.value));
    console.log(event.target.name);
    onChange(event.target.name, event.target.value);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor="app-input-field">{label}</label>}

      {type === "textarea" ? (
        <textarea
          className="form-control"
          placeholder={placeholder}
          value={value}
          name={name}
          defaultValue={value}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <input
          type={type}
          value={value}
          className="form-control"
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          name={name}
        />
      )}
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
};

export default InputField;
