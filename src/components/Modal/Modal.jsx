import s from './Modal.module.css';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  return (
    isOpen ? (
      <div className={s.overlay}>
        <div className={s.modal}>
          <h2>Do You confirm delete?</h2>
          <div className={s.buttons}>
          <button className={s.butmodYes} onClick={onConfirm}>Yes</button>
          <button className={s.butmodNo} onClick={onClose}>No</button>
          </div>
        </div>
      </div>
    ) : null

  );

};

export default Modal;