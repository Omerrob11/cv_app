function Footer({ inputsDataArr }) {
  console.log(inputsDataArr);
  return (
    <div className="footer">
      <div className="form_show">
        {inputsDataArr.map((obj) => {
          const correctKey = Object.keys(obj).filter((key) => key !== "id");

          //   const propertyIdentifer = obj.filed;
          //   return <p key={obj.id}>{obj[propertyIdentifer]}</p>;
          return <p key={obj.id}>{obj[correctKey]}</p>;
        })}
      </div>

      <button className="edit">Edit</button>
    </div>
  );
}

export default Footer;
