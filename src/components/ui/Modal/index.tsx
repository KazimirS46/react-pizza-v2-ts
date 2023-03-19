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

    modalRoot!.appendChild(modalBody);
    props.isOpen && document.body.setAttribute('style', 'overflow: hidden');

    return () => {
      modalRoot!.removeChild(modalBody);
      document.body.removeAttribute('style');
    };
  }, [modalBody, props.isOpen]);

  // useEffect(() => {
  //   props.isOpen
  //     ? document.body.setAttribute('style', 'overflow: hidden')
  //     : document.body.removeAttribute('style');
  // }, [props.isOpen]);

  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalOverlay} onClick={onClose}>
        {props.children}
      </div>
    </div>,
    modalBody
  );
};

export default Modal;
