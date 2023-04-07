import ExportTemplate from "./ExportTemplate";
import styles from "./ExportHeader.module.css";

const ExportHeader = () => {
  return (
    <ExportTemplate
      className={styles["export-header"]}
      ID="ID"
      companyName="Company name"
      numberOfPallets="Number of pallets"
      shippingDate="Shipping date"
      carrierName="Carrier name"
    ></ExportTemplate>
  );
};

export default ExportHeader;
