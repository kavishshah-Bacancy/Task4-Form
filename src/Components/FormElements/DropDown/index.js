import React from "react";
import PropTypes from "prop-types";

const DropDown = ({ value, data, placeholder, styleClass, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={`form-group ${styleClass}`}>
      <select value={value} className="form-control" onChange={handleChange}>
        <option value="">{placeholder}</option>
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

DropDown.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
  value: "",
  styleClass: "",
  placeholder: "",
};

export default DropDown;
