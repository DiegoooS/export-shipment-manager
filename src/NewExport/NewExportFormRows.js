import NewExportFormRow from "./NewExportFormRow";

import styles from "./NewExportFormRows.module.css";

const NewExportFormRows = (props) => {
  return (
    <div>
      <NewExportFormRow
        inputName="companyName"
        labelForInput="Company Name:"
        inputHandler={props.companyNameHandler}
        exportValueBinder={props.newExport.companyName}
        type="text"
        isEmpty={props.isEmpty.companyName}
      />
      <NewExportFormRow
        inputName="numberOfPallets"
        labelForInput="Number of pallets:"
        inputHandler={props.numberOfPalletsHandler}
        exportValueBinder={props.newExport.numberOfPallets}
        type="number"
        isEmpty={props.isEmpty.numberOfPallets}
      />
      <NewExportFormRow
        inputName="shippingDate"
        labelForInput="Shipping date:"
        inputHandler={props.shippingDateHandler}
        exportValueBinder={props.newExport.shippindDate}
        type="date"
        isEmpty={props.isEmpty.shippingDate}
      />

      <h1>Notification of the carrier:</h1>

      <NewExportFormRow
        inputName="carrierName"
        labelForInput="Carrier name:"
        inputHandler={props.carrierNameHandler}
        exportValueBinder={props.newExport.notificationOfTheCarrier.carrierName}
        type="text"
        isEmpty={props.isEmpty.carrierName}
      />
      <NewExportFormRow
        inputName="truckRegistrationNumber"
        labelForInput="Truck registration number:"
        inputHandler={props.truckRegistrationNumberHandler}
        exportValueBinder={
          props.newExport.notificationOfTheCarrier.truckRegistrationNumber
        }
        type="text"
        isEmpty={props.isEmpty.truckRegistrationNumber}
      />
      <NewExportFormRow
        inputName="trailerRegistrationNumber"
        labelForInput="Trailer registration number:"
        inputHandler={props.trailerRegistrationNumberHandler}
        exportValueBinder={
          props.newExport.notificationOfTheCarrier.trailerRegistrationNumber
        }
        type="text"
        isEmpty={props.isEmpty.trailerRegistrationNumber}
      />
      <NewExportFormRow
        inputName="driverName"
        labelForInput="Driver name:"
        inputHandler={props.driverNameHandler}
        exportValueBinder={props.newExport.notificationOfTheCarrier.driverName}
        type="text"
        isEmpty={props.isEmpty.driverName}
      />
      <NewExportFormRow
        inputName="driverSurname"
        labelForInput="Driver surname:"
        inputHandler={props.driverSurnameHandler}
        exportValueBinder={
          props.newExport.notificationOfTheCarrier.driverSurname
        }
        type="text"
        isEmpty={props.isEmpty.driverSurname}
      />

      <h1>Delivery address:</h1>

      <NewExportFormRow
        inputName="street"
        labelForInput="Street:"
        inputHandler={props.streetHandler}
        exportValueBinder={props.newExport.deliveryAddress.street}
        type="text"
        isEmpty={props.isEmpty.street}
      />
      <NewExportFormRow
        inputName="streetNumber"
        labelForInput="Street number:"
        inputHandler={props.streetNumberHandler}
        exportValueBinder={props.newExport.deliveryAddress.streetNumber}
        type="text"
        isEmpty={props.isEmpty.streetNumber}
      />
      <NewExportFormRow
        inputName="city"
        labelForInput="City:"
        inputHandler={props.cityHandler}
        exportValueBinder={props.newExport.deliveryAddress.city}
        type="text"
        isEmpty={props.isEmpty.city}
      />
      <NewExportFormRow
        inputName="zipCode"
        labelForInput="ZIP code:"
        inputHandler={props.zipCodeHandler}
        exportValueBinder={props.newExport.deliveryAddress.zipCode}
        type="text"
        isEmpty={props.isEmpty.zipCode}
      />
      <NewExportFormRow
        inputName="country"
        labelForInput="Country:"
        inputHandler={props.countryHandler}
        exportValueBinder={props.newExport.deliveryAddress.country}
        type="text"
        isEmpty={props.isEmpty.country}
      />
    </div>
  );
};

export default NewExportFormRows;
