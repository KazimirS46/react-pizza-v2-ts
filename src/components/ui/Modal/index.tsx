import { FC, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');
  const element = document.createElement('div');

  useEffect(() => {
    modalRoot && modalRoot.appendChild(element);
    isOpen && document.body.setAttribute('style', 'overflow: hidden');

    return () => {
      modalRoot && modalRoot.removeChild(element);
      document.body.removeAttribute('style');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalRoot, element]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalOverlay} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <button type={'button'} className={styles.buttonClose} onClick={onClose}>
          <svg xmlns='http://www.w3.org/2000/svg'>
            <g>
              <path
                className={styles.path}
                id='exit'
                d='m14.8,12l3.6,-3.6c0.8,-0.8 0.8,-2 0,-2.8c-0.8,-0.8 -2,-0.8 -2.8,0l-3.6,3.6l-3.6,-3.6c-0.8,-0.8 -2,-0.8 -2.8,0c-0.8,0.8 -0.8,2 0,2.8l3.6,3.6l-3.6,3.6c-0.8,0.8 -0.8,2 0,2.8c0.4,0.4 0.9,0.6 1.4,0.6s1,-0.2 1.4,-0.6l3.6,-3.6l3.6,3.6c0.4,0.4 0.9,0.6 1.4,0.6s1,-0.2 1.4,-0.6c0.8,-0.8 0.8,-2 0,-2.8l-3.6,-3.6z'
              />
            </g>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    element
  );
};

export default Modal;
