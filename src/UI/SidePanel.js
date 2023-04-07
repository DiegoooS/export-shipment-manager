import styles from "./SidePanel.module.css";

const SidePanel = (props) => {
  return (
    <div className={styles["side-panel"]}>
      <div className={styles["side-panel__content"]}>{props.children}</div>
    </div>
  );
};

export default SidePanel;
