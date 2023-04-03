import NewExportFormRow from "./NewExportFormRow";
import { useState } from "react";
import("./NewExportForm.css");

const NewExportForm = (props) => {
  const newExportTemplate = {
    id: Math.random(),
    companyName: "",
    numberOfPallets: "",
    shippindDate: "",
    notificationOfTheCarrier: {
      carrierName: "",
      truckRegistrationNumber: "",
      trailerRegistrationNumber: "",
      driverName: "",
      driverSurname: "",
    },
    deliveryAddress: {
      street: "",
      streetNumber: "",
      city: "",
      zipCode: "",
      country: "",
    },
  };

  const [newExport, setNewExport] = useState(newExportTemplate);

  const companyNameHandler = (event) => {
    setNewExport({ ...newExport, companyName: event.target.value });
  };

  const numberOfPalletsHandler = (event) => {
    setNewExport({ ...newExport, numberOfPallets: event.target.value });
  };

  const shippingDateHandler = (event) => {
    setNewExport({ ...newExport, shippindDate: event.target.value });
  };

  const carrierNameHandler = (event) => {
    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        carrierName: event.target.value,
      },
    });
  };

  const truckRegistrationNumberHandler = (event) => {
    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        truckRegistrationNumber: event.target.value,
      },
    });
  };

  const trailerRegistrationNumberHandler = (event) => {
    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        trailerRegistrationNumber: event.target.value,
      },
    });
  };

  const driverNameHandler = (event) => {
    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        driverName: event.target.value,
      },
    });
  };

  const driverSurnameHandler = (event) => {
    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        driverSurname: event.target.value,
      },
    });
  };

  const streetHandler = (event) => {
    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        street: event.target.value,
      },
    });
  };

  const streetNumberHandler = (event) => {
    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        streetNumber: event.target.value,
      },
    });
  };

  const cityHandler = (event) => {
    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        city: event.target.value,
      },
    });
  };

  const zipCodeHandler = (event) => {
    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        zipCode: event.target.value,
      },
    });
  };

  const countryHandler = (event) => {
    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        country: event.target.value,
      },
    });
  };

  const newExportHandler = (event) => {
    event.preventDefault();

    props.onNewExportSended(newExport);

    setNewExport(newExportTemplate);
  };

  return (
    <form className="new-export-form" onSubmit={newExportHandler}>
      <h1 className="new-export-form__heading">New export details:</h1>

      <NewExportFormRow
        inputName="companyName"
        labelForInput="Company Name:"
        inputHandler={companyNameHandler}
        exportValueBinder={newExport.companyName}
        type="text"
      />
      <NewExportFormRow
        inputName="numberOfPallets"
        labelForInput="Number of pallets:"
        inputHandler={numberOfPalletsHandler}
        exportValueBinder={newExport.numberOfPallets}
        type="number"
      />
      <NewExportFormRow
        inputName="shippingDate"
        labelForInput="Shipping date:"
        inputHandler={shippingDateHandler}
        exportValueBinder={newExport.shippindDate}
        type="date"
      />

      <h1 className="new-export-form__heading">Notification of the carrier:</h1>

      <NewExportFormRow
        inputName="carrierName"
        labelForInput="Carrier name:"
        inputHandler={carrierNameHandler}
        exportValueBinder={newExport.notificationOfTheCarrier.carrierName}
        type="text"
      />
      <NewExportFormRow
        inputName="truckRegistrationNumber"
        labelForInput="Truck registration number:"
        inputHandler={truckRegistrationNumberHandler}
        exportValueBinder={
          newExport.notificationOfTheCarrier.truckRegistrationNumber
        }
        type="text"
      />
      <NewExportFormRow
        inputName="trailerRegistrationNumber"
        labelForInput="Trailer registration number:"
        inputHandler={trailerRegistrationNumberHandler}
        exportValueBinder={
          newExport.notificationOfTheCarrier.trailerRegistrationNumber
        }
        type="text"
      />
      <NewExportFormRow
        inputName="driverName"
        labelForInput="Driver name:"
        inputHandler={driverNameHandler}
        exportValueBinder={newExport.notificationOfTheCarrier.driverName}
        type="text"
      />
      <NewExportFormRow
        inputName="driverSurname"
        labelForInput="Driver surname:"
        inputHandler={driverSurnameHandler}
        exportValueBinder={newExport.notificationOfTheCarrier.driverSurname}
        type="text"
      />

      <h1 className="new-export-form__heading">Delivery address:</h1>

      <NewExportFormRow
        inputName="street"
        labelForInput="Street:"
        inputHandler={streetHandler}
        exportValueBinder={newExport.deliveryAddress.street}
        type="text"
      />
      <NewExportFormRow
        inputName="streetNumber"
        labelForInput="Street number:"
        inputHandler={streetNumberHandler}
        exportValueBinder={newExport.deliveryAddress.streetNumber}
        type="text"
      />
      <NewExportFormRow
        inputName="city"
        labelForInput="City:"
        inputHandler={cityHandler}
        exportValueBinder={newExport.deliveryAddress.city}
        type="text"
      />
      <NewExportFormRow
        inputName="zipCode"
        labelForInput="ZIP code:"
        inputHandler={zipCodeHandler}
        exportValueBinder={newExport.deliveryAddress.zipCode}
        type="text"
      />
      <NewExportFormRow
        inputName="country"
        labelForInput="Country:"
        inputHandler={countryHandler}
        exportValueBinder={newExport.deliveryAddress.country}
        type="text"
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default NewExportForm;
