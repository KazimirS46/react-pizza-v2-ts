import React from 'react';

import styles from './CartBlock.module.scss';
import { useAppSelector } from '../../../../redux/hooks';
import CartItem from '../CartItem';
import useTotalCount from '../../../../hooks/useTotalParams';

export const CartBlock: React.FC = () => {
  const { products, totalPrice } = useAppSelector((state) => state.cart);

  const totalCount = useTotalCount();
  return (
    <>
      <h1 className={styles.name}>Корзина</h1>
      <h2>{totalPrice}</h2>
      <h3>{totalCount}</h3>
      <ul>
        {products && products.map((product) => <CartItem key={product.changeID} data={product} />)}
      </ul>
    </>
  );
};
