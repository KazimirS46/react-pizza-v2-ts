/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import usePizzas from './hooks/usePizzas';
import Loader from '../../ui/Loader';
import Sort from '../common/Sort';
import PizzaBlock from './PizzaBlock';
import Modal from '../../ui/Modal';
import { IPizzaItem } from '../../../types/types';
import { Categories, categories } from '../common/Categories';
import { PizzaInfo } from './PizzaInfo';
import usePizzaModalData from './hooks/usePizzaModalData';

export const Pizzas: FC = () => {
  const { pizzas, category, loading } = usePizzas();
  const { isPizzaModalOpen, pizzaModalData, handlePizzaModalClose, handlePizzaModalOpen } =
    usePizzaModalData();

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
            <Loader />
          </div>
        ) : (
          pizzas.map((pizza: IPizzaItem) => (
            <PizzaBlock key={pizza.productId} data={pizza} open={handlePizzaModalOpen} />
          ))
        )}
      </ul>

      <Modal isOpen={isPizzaModalOpen} onClose={handlePizzaModalClose}>
        {pizzaModalData && <PizzaInfo data={pizzaModalData} onClose={handlePizzaModalClose} />}
      </Modal>
    </>
  );
};
