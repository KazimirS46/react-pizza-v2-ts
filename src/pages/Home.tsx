/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IPizzaItem } from '../types/types';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { Categories, categories } from '../components/Home/Categories';
import { Sort } from '../components/Home/Sort';
import { PizzaBlock } from '../components/Home/PizzaBlock';
import { LoadingScreen } from '../components/Home/LoadingScreen';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  let { pizzas, loading } = useAppSelector((state) => state.pizzas);
  const { category, sort, order } = useAppSelector((state) => state.filter);

  const getPizzas = () => {
    const limit = 10;
    const categoryStr = category > 0 ? `&category=${category}` : '';
    const sortStr = `sortBy=${sort.sort}`;
    const orderStr = order ? '&order=asc' : '&order=desc';

    dispatch(fetchPizzas({ categoryStr, limit, sortStr, orderStr }));
  };

  React.useEffect(() => {
    getPizzas();
  }, [category, sort, order]);

  const listItem = pizzas.map((pizza: IPizzaItem) => (
    <PizzaBlock key={pizza.productId} {...pizza} />
  ));

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>{`${categories[category]} пиццы`}</h2>

      <ul className='content__items'>
        {loading === 'pending' ? (
          <div className='loading'>
            <LoadingScreen />
          </div>
        ) : (
          listItem
        )}
      </ul>
    </>
  );
};
