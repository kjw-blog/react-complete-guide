import { createPortal } from 'react-dom';
import Style from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={Style.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={Style.modal}>
      <div className={Style.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
