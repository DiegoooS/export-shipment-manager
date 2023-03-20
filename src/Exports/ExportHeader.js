import ExportTemplate from "./ExportTemplate";
import "./ExportHeader.css";

const ExportHeader = () => {
  return (
    <ExportTemplate className="export-header">
      <div>
        <p>ID</p>
      </div>
      <div>
        <p>Company Name</p>
      </div>
      <div>
        <p>Number Of Pallets</p>
      </div>
      <div>
        <p>Shipping Date</p>
      </div>
      <div>
        <p>Carrier Name</p>
      </div>
      <div>
        <p>Notification Of The Carrier</p>
      </div>
      <div>
        <p>Delivery Address</p>
      </div>
    </ExportTemplate>
  );
};

export default ExportHeader;
