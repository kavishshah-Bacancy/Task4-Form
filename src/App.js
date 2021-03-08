import "./App.css";
import InputField from "./Components/FormElements/InputField";
import DropDown from "./Components/FormElements/DropDown";
import { useState } from "react";
import { Validators } from "./Components/Validator/Validator";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Components/Button/Button";
import Checkbox from "./Components/FormElements/Checkbox";
import Select from "react-select";
import Dropzone from "./Components/FormElements/Dropzone";
import Radio from "./Components/FormElements/Radio";

function App() {
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    city: null,
    state: "",
    termsChecked: false,
    attachedFile: null,
  });
  const City = [
    { value: "", label: "Please Select City" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Chandigarh", label: "Chandigarh" },
  ];
  const handleChange = (name, value) => {
    setEmployeeForm({ ...employeeForm, [name]: value });
    console.log(employeeForm);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(employeeForm);
  };

  //React-select Hanlder
  const handleSelectChange = (selectedOption) => {
    setEmployeeForm({ ...employeeForm, city: selectedOption["value"] });
  };

  //normal select Handler
  const handleDropdown = (value) => {
    setEmployeeForm({ ...employeeForm, state: value });
  };
  const handleCheckboxChange = (value) => {
    setEmployeeForm({ ...employeeForm, termsChecked: value });
  };

  const dropzoneSubmitHandler = (file) => {
    if (file !== null) {
      setEmployeeForm({ ...employeeForm, attachedFile: file[0] });
    } else {
      alert("Please choose file");
    }
  };
  const onRadioChange = (value) => {
    setEmployeeForm({ ...employeeForm, gender: value });
  };

  return (
    <div className="container">
      <h2>Employee Registration Form</h2>
      <hr />
      <InputField
        value={employeeForm.firstName}
        type="text"
        placeholder="Please Enter your Firstname"
        validators={[
          {
            check: Validators.required,
            message: "Please Enter your Firstname",
          },
        ]}
        name="firstName"
        onChange={handleChange}
      />
      <InputField
        value={employeeForm.lastName}
        type="text"
        placeholder="Please Enter your Lastname"
        validators={[
          { check: Validators.required, message: "Please Enter your Lastname" },
        ]}
        name="lastName"
        onChange={handleChange}
      />
      <InputField
        value={employeeForm.email}
        type="text"
        placeholder="Enter your Email id here"
        validators={[
          { check: Validators.email, message: "Please enter valid email" },
        ]}
        name="email"
        onChange={handleChange}
      />
      <InputField
        value={employeeForm.phone}
        type="text"
        placeholder="Enter your Mobile number"
        validators={[
          { check: Validators.number, message: "Please enter valid phone" },
        ]}
        name="phone"
        onChange={handleChange}
      />
      <InputField
        value={employeeForm.address}
        type="textarea"
        placeholder="Enter Your Address.."
        validators={[
          { check: Validators.required, message: "Address is required" },
        ]}
        name="address"
        onChange={handleChange}
      />
      <div>
        <Radio
          label="Please Select Gender"
          options={[
            { id: "1", value: "Male", displayValue: "Male" },
            { id: "2", value: "Female", displayValue: "Female" },
            { id: "3", value: "Other", displayValue: "Other" },
          ]}
          name="gender"
          value={employeeForm.gender}
          onChange={onRadioChange}
        />
      </div>
      {/* Used React-select---here */}
      <Select
        value={employeeForm.city}
        onChange={handleSelectChange}
        options={City}
      />

      {/* //Used Reusable Normal Select */}
      <DropDown
        value={employeeForm.state}
        data={[
          { value: "Gujarat", label: "Gujarat" },
          { value: "Maharastra", label: "Maharastra" },
          { value: "Punjab", label: "Punjab" },
        ]}
        styleClass="mt-3"
        placeholder="Select state"
        onChange={handleDropdown}
        name="state"
      />
      <Dropzone onsubmit={dropzoneSubmitHandler} label="Select Resume" />
      <Checkbox
        label="I accept All the terms and conditions"
        onChange={handleCheckboxChange}
      />
      <Button onClickHandle={handleClick} value="submit" />
    </div>
  );
}

export default App;
