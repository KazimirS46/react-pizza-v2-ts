/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import styles from './FullPizza.module.scss';

import { IPizzaItem } from '../../../types/types';
import Loader from '../../ui/Loader';

export const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<IPizzaItem | undefined>();

  const fetchPizza = async () => {
    const { data } = await axios.get(`https://63aaeaf2fdc006ba604fd8b5.mockapi.io/items2/${id}`);
    setPizza(data);
  };

  React.useEffect(() => {
    fetchPizza();
  }, []);

  return pizza ? (
    <div className={styles.pizzaBlock}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={pizza.imageUrl} alt='Pizza' />
      </div>
      <div className={styles.infoContainer}>
        <h4 className={styles.title}>{pizza.title}</h4>
        <div className='description'>
          <p>{pizza.description}</p>
        </div>
        <div className={styles.selector}>
          <ul>
            <li className={styles.active}>тонкое</li>
            <li>традиционное</li>
          </ul>
          <ul>
            <li className={styles.active}>26 см.</li>
            <li>30 см.</li>
            <li>40 см.</li>
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
              Добавить в корзину за <span className={styles.price}>{pizza.price} ₽</span>
            </p>
            <i>2</i>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
