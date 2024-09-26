import { useState } from "react";
import "../styles/form-style.css";

import FormHeader from "./form-comp/heafForm";
import FormInputs from "./form-comp/formInputs";
import { SaveButton } from "./form-comp/buttons";
import Footer from "./form-comp/footerForm";

export default function PersonalInfo({ handlePersonalInfoChanges }) {
  const [inputValues, setInputValues] = useState([
    { name: "", id: crypto.randomUUID() },
    { email: "", id: crypto.randomUUID() },
    { tel: "", id: crypto.randomUUID() },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState({});
  const [showForm, setShowForm] = useState(false);

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

  const getInputHandler = (name, index) => {
    return (event) => {
      // the object to be updated, we create new array
      // than, we update the object name
      // meaning - we get the index of the object, than, change it's property name value
      // to the value of the event.target.value - the new input
      const updatedInputsValues = inputValues.map((obj, i) =>
        index === i ? { ...obj, [name]: event.target.value } : obj
      );
      setInputValues(updatedInputsValues);
      //   setInputValues({ ...inputValues, [name]: event.target.value });
    };
  };

  function getObjectIndex(name) {
    //object.keys return me the keysof the object.
    return inputValues.findIndex((obj) => Object.keys(obj).includes(name));
  }
  const inputsConfig = [
    {
      name: "name",
      type: "text",
      id: "full_name",
      label: "full_name",
      placeholder: "Enter your name",
      text: "Full Name:",
      value: inputValues[getObjectIndex("name")].name,
      onChange: getInputHandler("name", getObjectIndex("name")),
    },
    {
      name: "email",
      type: "email",
      id: "email",
      label: "email",
      placeholder: "Enter your email",
      text: "Email:",
      value: inputValues[getObjectIndex("email")].email,
      onChange: getInputHandler("email", getObjectIndex("email")),
    },
    {
      name: "tel",
      type: "tel",
      id: "tel",
      label: "tel",
      placeholder: "Enter your tel number",
      text: "Tel:",
      value: inputValues[getObjectIndex("tel")].tel,
      onChange: getInputHandler("tel", getObjectIndex("tel")),
    },
  ];

  return (
    <div className="information_component">
      <FormHeader
        title={title}
        icon={headingIcon}
        setShowForm={setShowForm}
        showForm={showForm}
      />
      {showForm && (
        <form
          className="form_container"
          onSubmit={(e) => {
            e.preventDefault();
            handlePersonalInfoChanges({ ...inputValues });

            setSubmittedValues([...inputValues]);
            setShowForm(false);
            if (!isSubmitted) {
              setIsSubmitted(true);
            }
          }}
        >
          <FormInputs inputsArr={inputsConfig} />
          <SaveButton />
        </form>
      )}

      {/* Conditionally render footer */}
      {isSubmitted && <Footer inputsDataArr={submittedValues} />}
    </div>
  );
}

// things i can do:
// make the inputs config a function, that create it for each new form
// make the form a component
// state: make sure the state is with all the state-standards
