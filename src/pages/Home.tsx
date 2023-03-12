/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Categories } from '../components/Home/Categories';
import { Sort } from '../components/Home/Sort';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IPizzaItem } from '../types/types';
import { fetchPizzas } from '../redux/slices/pizzaSlices';
import { PizzaBlock } from '../components/Home/PizzaBlock';

const mainTitle: string = 'Все пиццы';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  let { pizzas, loading } = useAppSelector((state) => state.pizzas);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const listItem = pizzas.map((pizza: IPizzaItem) => (
    <PizzaBlock key={pizza.productId} {...pizza} />
  ));

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      {/* Настроить изменения content__title */}
      <h2 className='content__title'>{mainTitle}</h2>
      <ul className='content__items'>{loading === 'pending' ? <h1>Loading</h1> : listItem}</ul>
    </>
  );
};
