import { FC, useEffect, useState } from 'react';
import styles from './PizzaInfo.module.scss';
import { IPizzaItem } from '../../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { addProduct } from '../../../../redux/slices/cartSlice';
import usePizzaParams from './hooks/usePizzaParams';

interface IProps {
  data: IPizzaItem;
  onClose(): void;
}

export const PizzaInfo: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  const { imageUrl, title, description, price, types, sizes, productId } = props.data;
  const {
    activeSize,
    activeType,
    changeID,
    finalPrice,
    setActiveType,
    setActiveSize,
    setChangeID,
  } = usePizzaParams(types, sizes, productId, price);
  const [count, setCount] = useState<number>(0);

  const addProductToCart = () => {
    const productToCart = { ...props.data, activeSize, activeType, changeID, finalPrice };
    dispatch(addProduct(productToCart));
  };

  useEffect(() => {
    setChangeID(productId + activeType.price + activeSize.price);
  }, [activeSize.price, activeType.price, productId, setChangeID]);

  useEffect(() => {
    const productCount = products.find((product) => product.changeID === changeID);
    setCount(productCount?.count ? productCount.count : 0);
  }, [changeID, products]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt='Pizza' />
      </div>
      <div className={styles.infoContainer}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.selector}>
          <ul>
            {types.map((type) => (
              <li
                key={type.id}
                className={activeType.id === type.id ? styles.active : ''}
                onClick={() => setActiveType(type)}
              >
                {type.value}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => (
              <li
                key={size.id}
                className={activeSize.id === size.id ? styles.active : ''}
                onClick={() => setActiveSize(size)}
              >
                {size.value + 'см.'}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div
            className={`${styles.button} ${styles.buttonOutline} ${styles.buttonAdd}`}
            onClick={addProductToCart}
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <p>
              Добавить <span className={styles.part}>в корзину за</span>{' '}
              <span className={styles.price}>{finalPrice} ₽</span>
            </p>
            {count > 0 ? <i>{count}</i> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
