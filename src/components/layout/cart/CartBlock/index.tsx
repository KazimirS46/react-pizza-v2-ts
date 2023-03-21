import React from 'react';

import styles from './CartBlock.module.scss';
import { useAppSelector } from '../../../../redux/hooks';

export const CartBlock: React.FC = () => {
  const { products, totalPrice } = useAppSelector((state) => state.cart);
  return (
    <>
      <h1 className={styles.name}>Корзина</h1>
      <div style={{ marginBottom: '40px' }}>
        <p>Total Price = {totalPrice}</p>
      </div>
      <div>
        <ul>
          {products &&
            products.map((product) => (
              <li key={product.changeID}>
                <h2>{product.title ? product.title : 'Названия нет'}</h2>
                <div>{product.count && product.count}</div>
                <div>{product.count && product.finalPrice * product.count}</div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
