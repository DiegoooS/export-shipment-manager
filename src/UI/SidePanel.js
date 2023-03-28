import("./SidePanel.css");

const SidePanel = (props) => {
  return (
    <div className="side-panel">
      <div className="side-panel__content">{props.children}</div>
    </div>
  );
};

export default SidePanel;
