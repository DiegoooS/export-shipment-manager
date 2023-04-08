import NewExportFormRow from "./NewExportFormRow";
import { useState } from "react";
import styles from "./NewExportForm.module.css";

const NewExportForm = (props) => {
  const newExportTemplate = {
    id: Math.random(),
    companyName: "",
    numberOfPallets: "",
    shippingDate: "",
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

  const isEmptyTemplate = {
    companyName: false,
    numberOfPallets: false,
    shippingDate: false,
    carrierName: false,
    truckRegistrationNumber: false,
    trailerRegistrationNumber: false,
    driverName: false,
    driverSurname: false,
    street: false,
    streetNumber: false,
    city: false,
    zipCode: false,
    country: false,
  };

  const [newExport, setNewExport] = useState(newExportTemplate);
  const [isEmpty, setIsEmpty] = useState(isEmptyTemplate);

  const companyNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, companyName: false };
      });
    }

    setNewExport({ ...newExport, companyName: event.target.value });
  };

  const numberOfPalletsHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, numberOfPallets: false };
      });
    }

    setNewExport({ ...newExport, numberOfPallets: event.target.value });
  };

  const shippingDateHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, shippingDate: false };
      });
    }

    setNewExport({ ...newExport, shippingDate: new Date(event.target.value) });
  };

  const carrierNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, carrierName: false };
      });
    }

    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        carrierName: event.target.value,
      },
    });
  };

  const truckRegistrationNumberHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, truckRegistrationNumber: false };
      });
    }

    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        truckRegistrationNumber: event.target.value,
      },
    });
  };

  const trailerRegistrationNumberHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, trailerRegistrationNumber: false };
      });
    }

    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        trailerRegistrationNumber: event.target.value,
      },
    });
  };

  const driverNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, driverName: false };
      });
    }

    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        driverName: event.target.value,
      },
    });
  };

  const driverSurnameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, driverSurname: false };
      });
    }

    setNewExport({
      ...newExport,
      notificationOfTheCarrier: {
        ...newExport.notificationOfTheCarrier,
        driverSurname: event.target.value,
      },
    });
  };

  const streetHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, street: false };
      });
    }

    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        street: event.target.value,
      },
    });
  };

  const streetNumberHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, streetNumber: false };
      });
    }

    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        streetNumber: event.target.value,
      },
    });
  };

  const cityHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, city: false };
      });
    }

    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        city: event.target.value,
      },
    });
  };

  const zipCodeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, zipCode: false };
      });
    }

    setNewExport({
      ...newExport,
      deliveryAddress: {
        ...newExport.deliveryAddress,
        zipCode: event.target.value,
      },
    });
  };

  const countryHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty((prevValues) => {
        return { ...prevValues, country: false };
      });
    }

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

    let newIsEmpty = isEmpty;
    // Check if values in form are not empty then prevent
    for (const property in newExport) {
      if (typeof newExport[property] === "object") {
        // Check is value is object. If yes then loop trough it
        for (const deeperProperty in newExport[property]) {
          if (newExport[property][deeperProperty].trim().length === 0) {
            // Change proper value of object if its really empty
            for (const key in newIsEmpty) {
              if (key === deeperProperty) {
                newIsEmpty[key] = true;
              }
            }
          }
        }
      }

      // Its value is not an object just check if its empty. If yes then change proper value in object
      if (typeof newExport[property] !== "object") {
        if (newExport[property].toString().trim().length === 0) {
          for (const key in newIsEmpty) {
            if (key === property) {
              newIsEmpty[key] = true;
            }
          }
        }
      }
    }

    // Set new object to the old one
    setIsEmpty(newIsEmpty);
    // Keep it to refresh react after submit
    setIsEmpty((prevValues) => {
      return { ...prevValues };
    });

    // Check if any value in object is empty. If yes then dont submit the data.
    for (const key in isEmpty) {
      if (isEmpty[key] === true) {
        return;
      }
    }

    // Submit the data if every input is filled
    props.onNewExportSended(newExport);

    setNewExport(newExportTemplate);
  };

  return (
    <form className={styles["new-export-form"]} onSubmit={newExportHandler}>
      <h1>New export details:</h1>

      <NewExportFormRow
        inputName="companyName"
        labelForInput="Company Name:"
        inputHandler={companyNameHandler}
        exportValueBinder={newExport.companyName}
        type="text"
        isEmpty={isEmpty.companyName}
      />
      <NewExportFormRow
        inputName="numberOfPallets"
        labelForInput="Number of pallets:"
        inputHandler={numberOfPalletsHandler}
        exportValueBinder={newExport.numberOfPallets}
        type="number"
        isEmpty={isEmpty.numberOfPallets}
      />
      <NewExportFormRow
        inputName="shippingDate"
        labelForInput="Shipping date:"
        inputHandler={shippingDateHandler}
        exportValueBinder={newExport.shippindDate}
        type="date"
        isEmpty={isEmpty.shippingDate}
      />

      <h1>Notification of the carrier:</h1>

      <NewExportFormRow
        inputName="carrierName"
        labelForInput="Carrier name:"
        inputHandler={carrierNameHandler}
        exportValueBinder={newExport.notificationOfTheCarrier.carrierName}
        type="text"
        isEmpty={isEmpty.carrierName}
      />
      <NewExportFormRow
        inputName="truckRegistrationNumber"
        labelForInput="Truck registration number:"
        inputHandler={truckRegistrationNumberHandler}
        exportValueBinder={
          newExport.notificationOfTheCarrier.truckRegistrationNumber
        }
        type="text"
        isEmpty={isEmpty.truckRegistrationNumber}
      />
      <NewExportFormRow
        inputName="trailerRegistrationNumber"
        labelForInput="Trailer registration number:"
        inputHandler={trailerRegistrationNumberHandler}
        exportValueBinder={
          newExport.notificationOfTheCarrier.trailerRegistrationNumber
        }
        type="text"
        isEmpty={isEmpty.trailerRegistrationNumber}
      />
      <NewExportFormRow
        inputName="driverName"
        labelForInput="Driver name:"
        inputHandler={driverNameHandler}
        exportValueBinder={newExport.notificationOfTheCarrier.driverName}
        type="text"
        isEmpty={isEmpty.driverName}
      />
      <NewExportFormRow
        inputName="driverSurname"
        labelForInput="Driver surname:"
        inputHandler={driverSurnameHandler}
        exportValueBinder={newExport.notificationOfTheCarrier.driverSurname}
        type="text"
        isEmpty={isEmpty.driverSurname}
      />

      <h1>Delivery address:</h1>

      <NewExportFormRow
        inputName="street"
        labelForInput="Street:"
        inputHandler={streetHandler}
        exportValueBinder={newExport.deliveryAddress.street}
        type="text"
        isEmpty={isEmpty.street}
      />
      <NewExportFormRow
        inputName="streetNumber"
        labelForInput="Street number:"
        inputHandler={streetNumberHandler}
        exportValueBinder={newExport.deliveryAddress.streetNumber}
        type="text"
        isEmpty={isEmpty.streetNumber}
      />
      <NewExportFormRow
        inputName="city"
        labelForInput="City:"
        inputHandler={cityHandler}
        exportValueBinder={newExport.deliveryAddress.city}
        type="text"
        isEmpty={isEmpty.city}
      />
      <NewExportFormRow
        inputName="zipCode"
        labelForInput="ZIP code:"
        inputHandler={zipCodeHandler}
        exportValueBinder={newExport.deliveryAddress.zipCode}
        type="text"
        isEmpty={isEmpty.zipCode}
      />
      <NewExportFormRow
        inputName="country"
        labelForInput="Country:"
        inputHandler={countryHandler}
        exportValueBinder={newExport.deliveryAddress.country}
        type="text"
        isEmpty={isEmpty.country}
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default NewExportForm;
