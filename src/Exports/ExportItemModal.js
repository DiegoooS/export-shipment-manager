import "./ExportItemModal.css";

const ExportItemModal = (props) => {
  return (
    <div className="export-item-modal">
      <h1>{props.exportDetails.companyName}</h1>
      <div className="export-item-modal__container">
        <div className="export-item-modal__title">Number of pallets</div>
        <div className="export-item-modal__content">
          {props.exportDetails.numberOfPallets}
        </div>
      </div>
      <div className="export-item-modal__container">
        <div className="export-item-modal__title">Shipping Date</div>
        <div className="export-item-modal__content">
          {[props.exportDetails.shippingDate.toLocaleDateString("pl-PL")]}
        </div>
      </div>
      <div className="export-item-modal__container">
        <div className="export-item-modal__title">Carrier name</div>
        <div className="export-item-modal__content">
          {props.exportDetails.notificationOfTheCarrier.carrierName}
        </div>
      </div>
      <div className="export-item-modal__container">
        <div className="export-item-modal__title">
          Notification of the carrier
        </div>
        <div className="export-item-modal__content">
          {props.exportDetails.notificationOfTheCarrier
            .truckRegistrationNumber +
            " / " +
            props.exportDetails.notificationOfTheCarrier
              .trailerRegistrationNumber +
            " " +
            props.exportDetails.notificationOfTheCarrier.driverName +
            " " +
            props.exportDetails.notificationOfTheCarrier.driverSurname}
        </div>
      </div>
      <div className="export-item-modal__container">
        <div className="export-item-modal__title">Delivery address</div>
        <div className="export-item-modal__content">
          {props.exportDetails.deliveryAddress.street +
            " " +
            props.exportDetails.deliveryAddress.streetNumber +
            " " +
            props.exportDetails.deliveryAddress.city +
            " " +
            props.exportDetails.deliveryAddress.zipCode +
            " " +
            props.exportDetails.deliveryAddress.country}
        </div>
      </div>
    </div>
  );
};

export default ExportItemModal;
