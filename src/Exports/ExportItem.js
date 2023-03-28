import ExportTemplate from "./ExportTemplate";
import ExportItemModal from "./ExportItemModal";
import "./ExportItem.css";

const ExportItem = (props) => {
  const openModalHandler = (event) => {
    props.onDataFromChild(
      <ExportItemModal exportDetails={props.exportDetails}></ExportItemModal>
    );
  };

  return (
    <div onClick={openModalHandler}>
      <ExportTemplate
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
