import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__logo"]}>{props.logo}</div>
      <ul className={styles["navbar__list"]}>{props.children}</ul>
    </div>
  );
};

export default Navbar;
