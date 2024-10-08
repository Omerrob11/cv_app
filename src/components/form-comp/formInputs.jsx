function FormInputs({ inputsArr }) {
  return (
    <div className="inputs_container">
      {inputsArr.map((item) => (
        <div key={item.id} className="input_container">
          <label htmlFor={item.id}>{item.text}</label>
          <input
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
            id={item.id}
            onChange={item.onChange}
            value={item.value}
          />
        </div>
      ))}
    </div>
  );
}

export default FormInputs;
