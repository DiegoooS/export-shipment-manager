import { useState } from "react";
import("./NewExportForm.css");

const NewExportForm = (props) => {
  const [companyName, setCompanyName] = useState("");

  const companyNameHandler = (event) => {
    setCompanyName(event.target.value);
  };

  const newExportHandler = (event) => {
    event.preventDefault();
    setCompanyName("");

    props.onNewExportSended(companyName);
  };

  return (
    <form onSubmit={newExportHandler}>
      <label htmlFor="companyName">Company Name:</label>
      <input
        onChange={companyNameHandler}
        value={companyName}
        type="text"
        name="companyName"
        id=""
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewExportForm;
