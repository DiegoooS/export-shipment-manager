import NewExport from "../NewExport/NewExport";
import("./Navbar.css");

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
    <div className="navbar">
      <div className="navbar__logo">EXPORT SHIPMENT MANAGER</div>
      <div className="navbar__content">
        <button onClick={openModal} className="navbar__add-button">
          +
        </button>
      </div>
    </div>
  );
};

export default Navbar;
