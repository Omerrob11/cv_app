import { useState } from "react";

function ShowCv({ compData, title }) {
  return (
    <div className="personal_data">
      <h2>{title}</h2>
      {compData.map((data, index) => {
        const personalDataKeys = Object.keys(data);
        // getting the correct key, using filter
        const properKey = personalDataKeys.filter((key) => key !== "id");

        return (
          <div key={data.id}>
            <p>
              {properKey}: {data[properKey]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ShowCv;

// problem at hand:
// I have a object with a bunch of stuff
// I need the
