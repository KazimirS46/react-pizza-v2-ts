import React from 'react';

import styles from './ModalWindow.module.scss';

import { ModalContext } from '../../../context/ModalContext';
import { PizzaInfo } from '../PizzaInfo';

export const ModalWindow: React.FC = () => {
  const { close } = React.useContext(ModalContext);
  const divRef = React.useRef<any>(null);

  //нужно настроить закрытие модального окна

  const closeModal: React.MouseEventHandler<HTMLDivElement> = (evt) => {
    if (evt.currentTarget === divRef.current) {
      close();
      console.log('Close');
    }
  };

  return (
    <div className={styles.outline} onClick={closeModal} ref={divRef}>
      <PizzaInfo />
    </div>
  );
};
