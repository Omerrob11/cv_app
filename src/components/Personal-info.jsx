import { useState } from "react";
import "../styles/form-style.css";

import FormHeader from "./form-comp/heafForm";

export default function PersonalInfo({ handlePersonalInfoChanges }) {
  const [inputValues, setInputValues] = useState({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    tel: "",
  });

  const title = "Personal Information";
  const headingIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon"
    >
      <path
        className="icon"
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
      />
    </svg>
  );

  const getInputHandler = (name) => {
    return (event) => {
      setInputValues({ ...inputValues, [name]: event.target.value });
    };
  };
  const inputsConfig = [
    {
      name: "name",
      type: "text",
      id: "full_name",
      label: "full_name",
      placeholder: "Enter your name",
      text: "Full Name:",
      value: inputValues.name,
      onChange: getInputHandler("name"),
    },
    {
      name: "email",
      type: "email",
      id: "email",
      label: "email",
      placeholder: "Enter your email",
      text: "Email:",
      value: inputValues.email,
      onChange: getInputHandler("email"),
    },
    {
      name: "tel",
      type: "tel",
      id: "tel",
      label: "tel",
      placeholder: "Enter your tel number",
      text: "Tel:",
      value: inputValues.tel,
      onChange: getInputHandler("tel"),
    },
  ];

  return (
    <div className="information_component">
      <FormHeader title={title} icon={headingIcon} />
      <form
        className="form_container"
        onSubmit={(e) => {
          e.preventDefault();
          handlePersonalInfoChanges({ ...inputValues });
        }}
      >
        <div className="input_container">
          <label htmlFor="full_name">Full Name:</label>
          <input
            type="text"
            id="full_name"
            value={inputValues.name}
            onChange={getInputHandler("name")}
          />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={inputValues.email}
            onChange={getInputHandler("email")}
          />
        </div>
        <div className="input_container">
          <label htmlFor="tel">Tel:</label>
          <input
            type="tel"
            id="tel"
            value={inputValues.tel}
            onChange={getInputHandler("tel")}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
