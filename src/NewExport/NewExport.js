import NewExportForm from "./NewExportForm";
import styles from "./NewExport.module.css";

const NewExport = (props) => {
  const newExportHandler = (sendedData) => {
    props.onNewExportSended(sendedData);
  };

  return (
    <div className={styles["new-export"]}>
      <NewExportForm onNewExportSended={newExportHandler}></NewExportForm>
    </div>
  );
};

export default NewExport;
