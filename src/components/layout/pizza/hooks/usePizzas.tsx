import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { fetchPizzas } from '../../../../redux/slices/pizzaSlice';

const usePizzas = () => {
  const dispatch = useAppDispatch();

  const { category, sort, order, searchValue } = useAppSelector((state) => state.filter);
  const { pizzas, loading } = useAppSelector((state) => state.pizzas);

  const getPizzas = () => {
    const limit = 10;
    const categoryStr = category > 0 ? `&category=${category}` : '';
    const sortStr = `sortBy=${sort.sort}`;
    const orderStr = order ? '&order=asc' : '&order=desc';
    const search = searchValue.length > 0 ? `&title=${searchValue}` : '';

    dispatch(fetchPizzas({ categoryStr, limit, sortStr, orderStr, search }));
  };

  return {
    pizzas,
    category,
    loading,
    searchValue,
    sort,
    order,
    getPizzas,
  };
};

export default usePizzas;
