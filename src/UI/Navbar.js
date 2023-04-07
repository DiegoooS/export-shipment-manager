import NewExport from "../NewExport/NewExport";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const addNewExport = (sendedData) => {
    props.onNewExportSended(sendedData);
  };

  const openModal = () => {
    props.sendNewExportFormToModal(
      <NewExport onNewExportSended={addNewExport}></NewExport>
    );
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__logo"]}>EXPORT SHIPMENT MANAGER</div>
      <div className={styles["navbar__content"]}>
        <button onClick={openModal} className={styles["navbar__add-button"]}>
          +
        </button>
      </div>
    </div>
  );
};

export default Navbar;
