import "./ExportTemplate.css";

const ExportTemplate = (props) => {
  const exportTemplateclasses = "export-template " + props.className;
  return (
    <div className={exportTemplateclasses}>
      <div className="export-template__column">
        <p>{props.ID}</p>
      </div>
      <div className="export-template__column">
        <p>{props.companyName}</p>
      </div>
      <div className="export-template__column">
        <p>{props.numberOfPallets}</p>
      </div>
      <div className="export-template__column">
        <p>{props.shippingDate}</p>
      </div>
      <div className="export-template__column">
        <p>{props.carrierName}</p>
      </div>
    </div>
  );
};

export default ExportTemplate;
