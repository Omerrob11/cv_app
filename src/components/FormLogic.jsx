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

// one for the form logic.
// one for the heading / icon
// one for the config?
// we want that the state here, will be updated.
// or - we can put the state in the hooks maybe? and change it there?

// using custom hooks:
// is to take the rendering logic, make it reusable.
// meaning - the component that use it is not responsbile for the logic

// meaning:
// custom hooks are managing the state
// component that use that are focusing on the UI - not cared about how the state is managed.
//custom hooks should manage the state!
