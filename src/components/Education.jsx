import { useState } from "react";
import FormHeader from "./form-comp/heafForm";
import FormInputs from "./form-comp/formInputs";
import { SaveButton } from "./form-comp/buttons";
import Footer from "./form-comp/footerForm";
import { SvgIcon } from "./SvgIcon";

export default function Education({ handleEducationInfoChanges }) {
  const [inputValues, setInputValues] = useState([
    { degree: "", id: crypto.randomUUID() },
    { school: "", id: crypto.randomUUID() },
    { city: "", id: crypto.randomUUID() },
    { country: "", id: crypto.randomUUID() },
    { startDate: "", id: crypto.randomUUID() },
    { endDate: "", id: crypto.randomUUID() },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState({});
  const [showForm, setShowForm] = useState(false);

  const title = "Education";

  const getInputHandler = (name, index) => {
    // handler for input
    // for each input, we return a handler (function)
    // updating the correct inputs, and returning the others.
    // then, update the state for the new array s
    return (event) => {
      const updateInputsValues = inputValues.map((obj, i) =>
        index === i ? { ...obj, [name]: event.target.value } : obj
      );
      setInputValues(updateInputsValues);
    };
  };
  function getInputsConfig() {
    return [
      {
        name: "degree",
        type: "text",
        id: "degree",
        label: "degree",
        placeholder: "Enter your degree",
        text: "Degree:",
        value: inputValues[getObjectIndex("degree")].degree,
        onChange: getInputHandler("degree", getObjectIndex("degree")),
      },
      {
        name: "school",
        type: "text",
        id: "school",
        label: "school",
        placeholder: "Enter your school",
        text: "School:",
        value: inputValues[getObjectIndex("school")].school,
        onChange: getInputHandler("school", getObjectIndex("school")),
      },
      {
        name: "city",
        type: "text",
        id: "city",
        label: "city",
        placeholder: "Enter your city",
        text: "City:",
        value: inputValues[getObjectIndex("city")].city,
        onChange: getInputHandler("city", getObjectIndex("city")),
      },
      {
        name: "country",
        type: "text",
        id: "country",
        label: "country",
        placeholder: "Enter your country",
        text: "Country:",
        value: inputValues[getObjectIndex("country")].country,
        onChange: getInputHandler("country", getObjectIndex("country")),
      },
      {
        name: "startDate",
        type: "date",
        id: "startDate",
        label: "startDate",
        placeholder: "Enter your startDate",
        text: "Start Date::",
        value: inputValues[getObjectIndex("startDate")].startDate,
        onChange: getInputHandler("startDate", getObjectIndex("startDate")),
      },
      {
        name: "endDate",
        type: "date",
        id: "endDate",
        label: "endDate",
        placeholder: "Enter your endDate",
        text: "End Date::",
        value: inputValues[getObjectIndex("endDate")].endDate,
        onChange: getInputHandler("endDate", getObjectIndex("endDate")),
      },
    ];
  }

  function getObjectIndex(name) {
    return inputValues.findIndex((obj) => Object.keys(obj).includes(name));
  }

  const inputsConfig = getInputsConfig();

  function toggleForm() {
    !showForm ? setShowForm(true) : setShowForm(false);
  }

  return (
    <div className="educationComponent">
      <FormHeader
        title={title}
        icon={<SvgIcon name="education" />}
        toggleForm={toggleForm}
      />

      {showForm && (
        <form
          className="form_container"
          onSubmit={(e) => {
            e.preventDefault();
            handleEducationInfoChanges([...inputValues]);
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
      {isSubmitted && (
        <Footer inputsDataArr={submittedValues} toggleForm={toggleForm} />
      )}
    </div>
  );
}
