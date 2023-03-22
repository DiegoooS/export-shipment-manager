import ExportHeader from "./ExportHeader";
import ExportItem from "./ExportItem";
import "./Exports.css";

const Exports = (props) => {
  const sendDataToModal = (sendedData) => {
    props.onDataFromChild(sendedData);
  };

  let exportList = props.exports.map((exportItem, index) => {
    return (
      <ExportItem
        onDataFromChild={sendDataToModal}
        key={index}
        exportDetails={exportItem}
      ></ExportItem>
    );
  });

  return (
    <div className="exports">
      <ExportHeader></ExportHeader>
      <div>{exportList}</div>
    </div>
  );
};

export default Exports;
