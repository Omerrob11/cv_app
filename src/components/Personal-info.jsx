import "../styles/form-style.css";

export default function PersonalInfo() {
  return (
    <form className="form_container">
      <h2 className="form_title">Personal Information:</h2>
      <div className="input_container">
        <label htmlFor="full_name">Full Name</label>
        <input type="text" id="full_name" />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
