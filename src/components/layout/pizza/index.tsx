/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import sortList from '../../../content/sortList.json';
import Loader from '../../ui/Loader';
import Modal from '../../ui/Modal';
import { PizzaInfo } from './PizzaInfo';
import Sort from '../common/Sort';
import { Categories, categories } from '../common/Categories';
import PizzaBlock from './PizzaBlock';
import { IPizzaItem } from '../../../types/types';
import usePizzaModalData from './hooks/usePizzaModalData';
import usePizzas from './hooks/usePizzas';
import { setFilters } from '../../../redux/slices/filterSlice';
import { useAppDispatch } from '../../../redux/hooks';
import Error from '../common/Error';
import NoteFoundBlock from '../common/NotFound';

export const Pizzas: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pizzas, loading, error, category, searchValue, sort, order, getPizzas } = usePizzas();
  const { isPizzaModalOpen, pizzaModalData, handlePizzaModalClose, handlePizzaModalOpen } =
    usePizzaModalData();
  const isSearchBar = useRef(false);
  const isFirstPageLoad = useRef(true);

  // --------------------- Проверка наличия поисковой строки -----------------------------

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);

      const sort = sortList.find((type) => type.sort === params.sortBy);
      const order = params.order === 'asc' ? true : false;

      dispatch(
        setFilters({
          category: Number(params.category!),
          order: order,
          sortBy: sort!,
          title: params.title!.toString(),
        })
      );

      isSearchBar.current = true;
    }
  }, []);

  // --------------------------------Запросы на бэк --------------------------------------

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearchBar.current) {
      getPizzas();
    }
    isSearchBar.current = false;
  }, [category, sort, order, searchValue]);

  // -------------------------- Создание поисковой строки --------------------------------

  useEffect(() => {
    if (!isFirstPageLoad.current) {
      const queryString = qs.stringify({
        sortBy: sort.sort,
        category: category,
        title: searchValue.length > 0 ? searchValue : null,
        order: order ? 'asc' : 'desc',
      });
      navigate(`?${queryString}`);
      console.log(queryString);
    }
    isFirstPageLoad.current = false;
  }, [category, sort, order, searchValue]);

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>

      {loading === 'pending' && (
        <div className='loading'>
          <Loader />
        </div>
      )}
      {loading === 'uploaded' &&
        (pizzas.length === 0 ? (
          <NoteFoundBlock />
        ) : (
          <>
            <h2 className='content__title'>{`${categories[category]} пиццы`}</h2>
            <ul className='content__items'>
              {pizzas.map((pizza: IPizzaItem) => (
                <PizzaBlock key={pizza.productId} data={pizza} open={handlePizzaModalOpen} />
              ))}
            </ul>
          </>
        ))}

      {error.status && <Error {...error} />}

      <Modal isOpen={isPizzaModalOpen} onClose={handlePizzaModalClose}>
        {pizzaModalData && <PizzaInfo data={pizzaModalData} onClose={handlePizzaModalClose} />}
      </Modal>
    </>
  );
};
