import React from "react";

function Radio({ label, options, onChange, value, name }) {
  const onHandleChange = (event, value) => {
    onChange(event.target.value);
  };
  return (
    <div>
      {label ? <label className="Label">{label}</label> : null}
      <div
        style={{ textAlign: "left" }}
        name={name}
        value={value}
        onChange={(e) => onHandleChange(e, value)}
      >
        {options.map((option) => (
          <div key={option.value} className={"form-check form-check-inline"}>
            <input
              className={"form-check-input"}
              type="radio"
              name={name}
              id={option.id}
              value={option.value}
            />
            <label className={"form-check-label"}>{option.displayValue}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Radio;
