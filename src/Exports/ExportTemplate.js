import "./ExportTemplate.css";

const ExportTemplate = (props) => {
  const exportTemplateclasses = "export-template " + props.className;
  return <div className={exportTemplateclasses}>{props.children}</div>;
};

export default ExportTemplate;
