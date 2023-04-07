import styles from "./ExportItemModalRow.module.css";

const ExportItemModalRow = (props) => {
  return (
    <li className={styles["export-item-modal-row__container"]}>
      <div className={styles["export-item-modal-row__title"]}>
        {props.title}
      </div>
      <div className={styles["export-item-modal-row__content"]}>
        {props.content}
      </div>
    </li>
  );
};

export default ExportItemModalRow;
