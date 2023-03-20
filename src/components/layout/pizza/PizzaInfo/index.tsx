import { FC } from 'react';
import styles from './PizzaInfo.module.scss';
import Loader from '../../../ui/Loader';
import thicknessArr from '../../../../content/thicknessPrice.json';
import widthArr from '../../../../content/widthPrice.json';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  IThicknessPrice,
  IWidthPrice,
  setSize,
  setTHickness,
} from '../../../../redux/slices/filterSlice';
import { IPizzaItem } from '../../../../types/types';

interface IProps {
  data: IPizzaItem | null;
  onClose(): void;
}

export const PizzaInfo: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const { thickness, size } = useAppSelector((state) => state.filter);
  const chooseThickness = (thickness: IThicknessPrice) => {
    dispatch(setTHickness(thickness));
  };
  const chooseSize = (size: IWidthPrice) => {
    dispatch(setSize(size));
  };

  if (!props.data) {
    return <Loader />;
  }

  const { imageUrl, title, description, price } = props.data;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt='Pizza' />
      </div>
      <div className={styles.infoContainer}>
        <h4 className={styles.title}>{title}</h4>
        <div className='description'>
          <p>{description}</p>
        </div>
        <div className={styles.selector}>
          <ul>
            {thicknessArr.map((el: IThicknessPrice) => (
              <li
                key={el.id}
                className={thickness.id === el.id ? styles.active : ''}
                onClick={() => chooseThickness(el)}
              >
                {el.thicknessName}
              </li>
            ))}
          </ul>
          <ul>
            {widthArr.map((widthEl: IWidthPrice) => (
              <li
                key={widthEl.id}
                className={size.id === widthEl.id ? styles.active : ''}
                onClick={() => chooseSize(widthEl)}
              >
                {widthEl.widthName + 'см.'}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={`${styles.button} ${styles.buttonOutline} ${styles.buttonAdd}`}>
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
              Добавить в корзину за <span className={styles.price}>{price} ₽</span>
            </p>
            <i>2</i>
          </div>
        </div>
      </div>
    </div>
  );
};
