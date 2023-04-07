import ExportHeader from "./ExportHeader";
import ExportItem from "./ExportItem";
import styles from "./Exports.module.css";

const Exports = (props) => {
  const sendExportToModal = (sendedData) => {
    props.onExportClicked(sendedData);
  };

  let exportList = props.exports.map((exportItem, index) => {
    return (
      <ExportItem
        onExportClicked={sendExportToModal}
        key={index}
        exportDetails={exportItem}
      ></ExportItem>
    );
  });

  return (
    <div className={styles.exports}>
      <ExportHeader></ExportHeader>
      <div>{exportList}</div>
    </div>
  );
};

export default Exports;
