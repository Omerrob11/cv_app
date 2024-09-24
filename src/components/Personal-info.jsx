import { useState } from "react";
import "../styles/form-style.css";
import arrow from "../assets/arrow.webp";

export default function PersonalInfo({ handlePersonalInfoChanges }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const getInputHandler = (name) => {
    return (event) => {
      setInputValues({ ...inputValues, [name]: event.target.value });
    };
  };

  return (
    <div className="information_component">
      <div className="form_head">
        <div className="person_icon">
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
        </div>
        <h2 className="form_title">Personal Information:</h2>
        <i className="fas fa-chevron-down img arrow"></i>
      </div>
      <form
        className="form_container"
        onSubmit={(e) => {
          console.log("sss");
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
