import styles from "./Navigation.module.css";
import NewExport from "../NewExport/NewExport";

const Navigation = (props) => {
  const addNewExport = (sendedData) => {
    props.onNewExportSended(sendedData);
  };

  const openModal = () => {
    props.changeModalCloseButtonToWhite();
    props.sendNewExportFormToModal(
      <NewExport onNewExportSended={addNewExport}></NewExport>
    );
  };

  return (
    <div className={styles["navigation__content"]}>
      <li className={styles["navigation__item"]}>
        <button
          onClick={openModal}
          className={styles["navigation__add-button"]}
        >
          +
        </button>
      </li>
    </div>
  );
};

export default Navigation;
