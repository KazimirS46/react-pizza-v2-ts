import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { fetchPizzas } from '../../../../redux/slices/pizzaSlice';
import { useEffect } from 'react';

const usePizzas = () => {
  const dispatch = useAppDispatch();

  const { pizzas, loading } = useAppSelector((state) => state.pizzas);
  const { category, sort, order } = useAppSelector((state) => state.filter);

  const getPizzas = () => {
    const limit = 10;
    const categoryStr = category > 0 ? `&category=${category}` : '';
    const sortStr = `sortBy=${sort.sort}`;
    const orderStr = order ? '&order=asc' : '&order=desc';

    dispatch(fetchPizzas({ categoryStr, limit, sortStr, orderStr }));
  };

  useEffect(() => {
    getPizzas();
  }, [category, sort, order]);

  return {
    pizzas,
    category,
    loading,
  };
}

export default usePizzas;
