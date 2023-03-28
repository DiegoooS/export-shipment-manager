import "./Modal.css";

const Modal = (props) => {
  const closeModal = (event) => {
    props.onDataFromChild();
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <div onClick={closeModal} className="modal__close">
          x
        </div>
        <div className="modal__content__children">{props.children}</div>
      </div>
      <div onClick={closeModal} className="modal__background"></div>
    </div>
  );
};

export default Modal;
