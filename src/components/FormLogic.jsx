import { useState } from "react";

export default function useFormLogic(initialInputs, handleInfoChanges) {
  const [inputValues, setInputValues] = useState(() => {
    return initialInputs.map((input) => ({ ...input }));
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState({});
  const [showForm, setShowForm] = useState(false);

  const getInputHandler = (name, index) => {
    return (event) => {
      const updatedInputsValues = inputValues.map((obj, i) =>
        index === i ? { ...obj, [name]: event.target.value } : obj
      );
      setInputValues(updatedInputsValues);
    };
  };

  function getObjectIndex(name) {
    //object.keys return me the keysof the object.
    return inputValues.findIndex((obj) => Object.keys(obj).includes(name));
  }

  function toggleForm() {
    !showForm ? setShowForm(true) : setShowForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const deepCopyOfInputValuesOne = inputValues.map((input) => ({ ...input }));

    handleInfoChanges(deepCopyOfInputValuesOne);
    const deepCopyOfInputValuesTwo = inputValues.map((input) => ({ ...input }));
    // im not sure we need it
    // because it's already updated maybe?
    setSubmittedValues(deepCopyOfInputValuesTwo);
    setShowForm(false);
    if (!isSubmitted) {
      setIsSubmitted(true);
    }
  }

  return {
    inputValues,
    isSubmitted,
    submittedValues,
    showForm,
    getInputHandler,
    getObjectIndex,
    handleSubmit,
    toggleForm,
  };
}
