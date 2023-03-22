import ExportTemplate from "./ExportTemplate";
import "./ExportItem.css";

const ExportItem = (props) => {
  const openModalHandler = (event) => {
    props.onDataFromChild(props.exportDetails);
  };

  return (
    <div onClick={openModalHandler}>
      <ExportTemplate
        onClick={openModalHandler}
        className="export-item"
        ID={props.exportDetails.id}
        companyName={props.exportDetails.companyName}
        numberOfPallets={props.exportDetails.numberOfPallets}
        shippingDate={props.exportDetails.shippingDate.toLocaleDateString(
          "pl-PL"
        )}
        carrierName={props.exportDetails.carrierName}
      ></ExportTemplate>
    </div>
  );
};

export default ExportItem;
