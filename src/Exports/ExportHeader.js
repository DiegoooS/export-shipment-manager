import ExportTemplate from "./ExportTemplate";
import "./ExportHeader.css";

const ExportHeader = () => {
  return (
    <ExportTemplate
      className="export-header"
      ID="ID"
      companyName="Company name"
      numberOfPallets="Number of pallets"
      shippingDate="Shipping date"
      carrierName="Carrier name"
    ></ExportTemplate>
  );
};

export default ExportHeader;
