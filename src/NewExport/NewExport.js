import NewExportForm from "./NewExportForm";
import "./NewExport.css";

const NewExport = (props) => {
  const newExportHandler = (sendedData) => {
    props.onNewExportSended(sendedData);
  };

  return (
    <div className="new-export">
      <NewExportForm onNewExportSended={newExportHandler}></NewExportForm>
    </div>
  );
};

export default NewExport;
