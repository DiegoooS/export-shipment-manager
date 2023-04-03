import("./NewExportFormRow.css");

const NewExportFormRow = (props) => {
  return (
    <div className="new-export-form__row ">
      <div className="new-export-form__col ">
        <label htmlFor={props.inputName}>{props.labelForInput}</label>
      </div>
      <div className="new-export-form__col ">
        <input
          onChange={props.inputHandler}
          value={props.exportValueBinder}
          type={props.type}
          name={props.inputName}
          id=""
        />
      </div>
    </div>
  );
};

export default NewExportFormRow;
