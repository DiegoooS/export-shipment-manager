import styles from "./MainPanel.module.css";

const MainPanel = (props) => {
  return <div className={styles["main-panel"]}>{props.children}</div>;
};

export default MainPanel;
