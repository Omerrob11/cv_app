import { useState } from "react";
import "../styles/form-style.css";

export default function PersonalInfo({ handlePerosnalInfoChnges }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const getInputHandler = (name) => {
    return (event) => {
      setInputValues({ ...values, [name]: event.target.value });
    };
  };

  return (
    <form className="form_container">
      <h2 className="form_title">Personal Information:</h2>
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
  );
}
