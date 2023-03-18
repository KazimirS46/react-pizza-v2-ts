import React from 'react';

import styles from './Categories.module.scss';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setCategory } from '../../../../redux/slices/filterSlice';

export const categories: string[] = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const categoryIndex = useAppSelector((state) => state.filter.category);
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category: string, index: number) => (
          <li
            key={index}
            className={categoryIndex === index ? styles.active : ''}
            onClick={() => dispatch(setCategory(index))}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
