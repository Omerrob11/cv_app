import { useState } from "react";

function FormHeader({ icon, title, toggleForm }) {
  return (
    <div className="form_head">
      <div className="heading_icon">{icon}</div>
      <h2 className="form_title">{title}</h2>
      <i className="fas fa-chevron-down img arrow" onClick={toggleForm}></i>;
    </div>
  );
}

export default FormHeader;
