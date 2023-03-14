import React from 'react';

import styles from './CartBlock.module.scss';

export const CartBlock: React.FC = () => {
  return (
    <>
      <h1 className={styles.name}>Корзина</h1>
    </>
  );
};
