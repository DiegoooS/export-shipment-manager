import Exports from "./Exports/Exports";
import Modal from "./Components/Modal";
import React, { useState } from "react";
import Page from "./UI/Page";
import MainPanel from "./UI/MainPanel";
import SidePanel from "./UI/SidePanel";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const exports = [
    {
      id: 1,
      companyName: "Build With Us",
      numberOfPallets: "5",
      shippingDate: new Date(2024, 6, 12),
      carrierName: "RideWithUs",
      notificationOfTheCarrier: {
        truckRegistrationNumber: "WA 11111",
        trailerRegistrationNumber: "WA 22222",
        driverName: "John",
        driverSurname: "Smith",
      },
      deliveryAddress: {
        street: "Greystreet",
        streetNumber: "21/37",
        city: "Warsaw",
        zipCode: "11-111",
        country: "Poland",
      },
    },
    {
      id: 2,
      companyName: "Never Build",
      numberOfPallets: "2",
      shippingDate: new Date(2025, 2, 11),
      carrierName: "GoGoGo",
      notificationOfTheCarrier: {
        truckRegistrationNumber: "WR 22222",
        trailerRegistrationNumber: "WRT ABC12",
        driverName: "Samantha",
        driverSurname: "Smithgirl",
      },
      deliveryAddress: {
        street: "Yellowstreet",
        streetNumber: "1/12",
        city: "Berlin",
        zipCode: "11-111",
        country: "Germany",
      },
    },
  ];

  const [modalClasses, setModalClasses] = useState({ display: "none" });
  const [modalContent, setModalContent] = useState("asdsad");

  const openModal = (sendedData) => {
    setModalContent(sendedData);
    setModalClasses({ display: "block" });
  };

  const closeModal = () => {
    setModalContent("");
    setModalClasses({ display: "none" });
  };

  const newExportHandler = (sendedData) => {
    console.log(sendedData);
  };

  return (
    <div>
      <Page>
        <SidePanel>
          <Navbar
            onDataFromChild={openModal}
            onNewExportSended={newExportHandler}
          />
        </SidePanel>
        <MainPanel>
          <Exports onDataFromChild={openModal} exports={exports}></Exports>
        </MainPanel>
      </Page>

      <div style={modalClasses}>
        <Modal onDataFromChild={closeModal}>{modalContent}</Modal>
      </div>
    </div>
  );
}

export default App;
