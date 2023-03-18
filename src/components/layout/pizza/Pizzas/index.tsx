/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { IPizzaItem } from '../../../../types/types';
import { Categories, categories } from '../../common/Categories';
import { Sort } from '../../common/Sort';
import { PizzaBlock } from '../PizzaBlock';
import { Loader } from '../../../ui/Loader';
import PizzaModal from '../PizzaModal';
import usePizzas from './usePizzas';
import usePizzaModal from './usePizzaModal';

export const Pizzas: React.FC = () => {
  const {
    pizzas,
    category,
    loading,
  } = usePizzas();

  const {
    isPizzaModalOpen,
    pizzaModalData,
    handlePizzaModalOpen,
    handlePizzaModalClose,
  } = usePizzaModal();

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>

      <h2 className='content__title'>
        {`${categories[category]} пиццы`}
      </h2>

      <ul className='content__items'>
        {/* TODO: check loading state */}
        {loading === 'pending' ? (
          <div className='loading'>
            <Loader />
          </div>
        ) : pizzas.map((pizza: IPizzaItem) => {
          return (
            <PizzaBlock
              key={pizza.productId}
              data={pizza}
              onClick={handlePizzaModalOpen}
            />
          );
        })}
      </ul>

      <PizzaModal
        data={pizzaModalData}
        isOpen={isPizzaModalOpen}
        onClose={handlePizzaModalClose}
      />
    </>
  );
};
