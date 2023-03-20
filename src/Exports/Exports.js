import ExportHeader from "./ExportHeader";
import ExportItem from "./ExportItem";
import "./Exports.css";

const Exports = (props) => {
  let exportList = props.exports.map((exportItem, index) => {
    return <ExportItem key={index} exportDetails={exportItem}></ExportItem>;
  });

  return (
    <div className="exports">
      <ExportHeader></ExportHeader>
      <div>{exportList}</div>
    </div>
  );
};

export default Exports;
