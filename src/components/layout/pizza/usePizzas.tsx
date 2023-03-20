import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchPizzas } from '../../../redux/slices/pizzaSlice';

const usePizzas = () => {
  const dispatch = useAppDispatch();

  const { category, sort, order } = useAppSelector((state) => state.filter);
  const { pizzas, loading } = useAppSelector((state) => state.pizzas);

  const getPizzas = () => {
    const limit = 10;
    const categoryStr = category > 0 ? `&category=${category}` : '';
    const sortStr = `sortBy=${sort.sort}`;
    const orderStr = order ? '&order=asc' : '&order=desc';

    dispatch(fetchPizzas({ categoryStr, limit, sortStr, orderStr }));
  };

  useEffect(() => {
    getPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sort, order]);

  return {
    pizzas,
    category,
    loading,
  };
};

export default usePizzas;
