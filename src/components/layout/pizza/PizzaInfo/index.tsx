import React from 'react';

import styles from './index.module.scss';
import { IPizzaItem } from '../../../../types/types';

interface IProps {
  data: IPizzaItem;

  onClose(): void;
}

export const PizzaInfo: React.FC<IProps> = props => {
  return (
    <div className={styles.container}>
      <h1>Pizza Info</h1>
      <h2>{props.data.title}</h2>
      <button onClick={props.onClose}>X</button>
    </div>
  );
};
