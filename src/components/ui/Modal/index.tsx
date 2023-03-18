import React, { FC, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.scss';

interface IProps {
  isOpen: boolean;
  children: ReactNode | ReactNode[];

  onClose(): void;
}

const Modal: FC<IProps> = ({ onClose, ...props }) => {
  const modalBody = document.createElement('div');

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');

    document.body.setAttribute('style', 'overflow: hidden');
    modalRoot!.appendChild(modalBody);

    return () => {
      document.body.removeAttribute('style');
      modalRoot!.removeChild(modalBody);
    };
  }, [modalBody]);

  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div
        className={styles.modalOverlay}
        onClick={onClose}
      >
        {props.children}
      </div>
    </div>,
    modalBody,
  );
};

export default Modal;
