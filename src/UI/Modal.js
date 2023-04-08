import styles from "./Modal.module.css";

const Modal = (props) => {
  const closeModal = (event) => {
    props.onCloseButtonOrBackgroundClicked();
  };

  return (
    <div className={styles.modal}>
      <div className={styles["modal__content"]}>
        <div
          onClick={closeModal}
          className={`${styles["modal__close"]} ${
            props.changeCloseButtonToWhite && styles["light-color"]
          }`}
        >
          x
        </div>
        <div className={styles["modal__content__children"]}>
          {props.children}
        </div>
      </div>
      <div onClick={closeModal} className={styles["modal__background"]}></div>
    </div>
  );
};

export default Modal;
