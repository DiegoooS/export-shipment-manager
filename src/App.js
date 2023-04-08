import Exports from "./Exports/Exports";
import Modal from "./UI/Modal";
import React, { useState } from "react";
import Page from "./UI/Page";
import MainPanel from "./UI/MainPanel";
import SidePanel from "./UI/SidePanel";
import Navbar from "./UI/Navbar";
import styles from "./App.module.css";

const DUMMY__EXPORTS = [
  {
    id: Math.random(),
    companyName: "Build With Us",
    numberOfPallets: "5",
    shippingDate: new Date(2024, 6, 12),
    notificationOfTheCarrier: {
      carrierName: "RideWithUs",
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
    id: Math.random(),
    companyName: "Never Build",
    numberOfPallets: "2",
    shippingDate: new Date(2025, 2, 11),
    notificationOfTheCarrier: {
      carrierName: "GoGoGo",
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

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalCloseButtonColorWhite, setModalCloseButtonColorWhite] =
    useState(false);
  const [modalContent, setModalContent] = useState("");
  const [exports, setExports] = useState(DUMMY__EXPORTS);

  const openModal = (sendedData) => {
    setModalContent(sendedData);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalContent("");
    setShowModal(false);
    setModalCloseButtonColorWhite(false);
  };

  const changeModalCloseButtonToWhite = () => {
    setModalCloseButtonColorWhite(true);
  };

  const newExportHandler = (sendedData) => {
    setExports((prevExports) => {
      return [sendedData, ...prevExports];
    });

    closeModal();
  };

  return (
    <div className={styles.app}>
      <Page>
        <SidePanel>
          <Navbar
            sendNewExportFormToModal={openModal}
            changeModalCloseButtonToWhite={changeModalCloseButtonToWhite}
            onNewExportSended={newExportHandler}
          />
        </SidePanel>
        <MainPanel>
          <Exports onExportClicked={openModal} exports={exports}></Exports>
        </MainPanel>
      </Page>

      <div
        className={
          showModal ? styles["app__show-modal"] : styles["app__hide-modal"]
        }
      >
        <Modal
          changeCloseButtonToWhite={modalCloseButtonColorWhite}
          onCloseButtonOrBackgroundClicked={closeModal}
        >
          {modalContent}
        </Modal>
      </div>
    </div>
  );
}

export default App;
