import styles from "./NewExportFormRow.module.css";

const NewExportFormRow = (props) => {
  return (
    <div className={styles["new-export-form__row"]}>
      <div className={styles["new-export-form__col"]}>
        <label htmlFor={props.inputName}>{props.labelForInput}</label>
      </div>
      <div className={styles["new-export-form__col"]}>
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
