import { useState } from "react";

export default function useFormLogic() {
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
}

// one for the form logic.
// one for the heading / icon
// one for the config?
// we want that the state here, will be updated.
// or - we can put the state in the hooks maybe? and change it there?
