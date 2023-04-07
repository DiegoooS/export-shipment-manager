import ExportTemplate from "./ExportTemplate";
import ExportItemModal from "./ExportItemModal";
import styles from "./ExportItem.module.css";

const ExportItem = (props) => {
  const sendExportToModal = (event) => {
    props.onExportClicked(
      <ExportItemModal exportDetails={props.exportDetails}></ExportItemModal>
    );
  };

  return (
    <div onClick={sendExportToModal}>
      <ExportTemplate
        className={styles['export-item']}
        ID={props.exportDetails.id}
        companyName={props.exportDetails.companyName}
        numberOfPallets={props.exportDetails.numberOfPallets}
        shippingDate={props.exportDetails.shippingDate.toLocaleDateString(
          "pl-PL"
        )}
        carrierName={props.exportDetails.notificationOfTheCarrier.carrierName}
      ></ExportTemplate>
    </div>
  );
};

export default ExportItem;
