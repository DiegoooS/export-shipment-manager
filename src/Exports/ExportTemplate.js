import styles from "./ExportTemplate.module.css";

const ExportTemplate = (props) => {
  return (
    <div className={`${styles["export-template"]} ${props.className}`}>
      <div className="export-template__column">
        <p>{props.ID}</p>
      </div>
      <div className="export-template__column">
        <p>{props.companyName}</p>
      </div>
      <div
        className={
          styles[
            ("export-template__column", "export-template__number-of-pallets")
          ]
        }
      >
        <p>{props.numberOfPallets}</p>
      </div>
      <div
        className={
          styles[("export-template__column", "export-template__shipping-date")]
        }
      >
        <p>{props.shippingDate}</p>
      </div>
      <div
        className={
          styles[("export-template__column", "export-template__carrier-name")]
        }
      >
        <p>{props.carrierName}</p>
      </div>
    </div>
  );
};

export default ExportTemplate;
