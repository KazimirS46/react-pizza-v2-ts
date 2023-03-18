import React from 'react';

import styles from './ModalWindow.module.scss';

import { PizzaInfo } from '../PizzaInfo';

interface IModalWindowProps {
  onClose: () => void;
  visible: boolean;
}

export const ModalWindow: React.FC<IModalWindowProps> = ({ onClose, visible }) => {
  return (
    <div className={visible ? styles.outline : styles.invisible}>
      <PizzaInfo close={onClose} />
    </div>
  );
};
