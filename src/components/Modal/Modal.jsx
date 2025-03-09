import s from './Modal.module.css';

const Modal = ({ children, closeModal }) => {
    return (
        <div className={s.backdrop} onClick={closeModal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;