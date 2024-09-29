export default function Education() {
  const [inputValues, setInputValues] = useState([
    { degree: "", id: crypto.randomUUID() },
    { school: "", id: crypto.randomUUID() },
    { city: "", id: crypto.randomUUID() },
    { country: "", id: crypto.randomUUID() },
    { startDate: "", id: crypto.randomUUID() },
    { endDate: "", id: crypto.randomUUID() },
  ]);
  return (
    <div className="education_container">
      <h1>This is all about eudcation</h1>
      <p>education is the best!</p>
    </div>
  );
}
