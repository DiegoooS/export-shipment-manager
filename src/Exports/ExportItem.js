import ExportTemplate from "./ExportTemplate";
import "./ExportItem.css";

const ExportItem = (props) => {
  return (
    <ExportTemplate>
      <div>
        <p>{props.exportDetails.id}</p>
      </div>
      <div>
        <p>{props.exportDetails.companyName}</p>
      </div>
      <div>
        <p>{props.exportDetails.numberOfPallets}</p>
      </div>
      <div>
        <p>{props.exportDetails.shippingDate.toLocaleDateString("pl-PL")}</p>
      </div>
      <div>
        <p>{props.exportDetails.carrierName}</p>
      </div>
      <div>
        <p>{JSON.stringify(props.exportDetails.notificationOfTheCarrier)}</p>
      </div>
      <div>
        <p>{JSON.stringify(props.exportDetails.deliveryAddress)}</p>
      </div>
    </ExportTemplate>
  );
};

export default ExportItem;
