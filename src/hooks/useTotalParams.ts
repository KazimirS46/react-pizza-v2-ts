import { useAppSelector } from '../redux/hooks';

const useTotalCount = () => {
  const { products } = useAppSelector((state) => state.cart);

  const totalCount = products.reduce((sum, product) => {
    return (product.count ? product.count : 0) + sum;
  }, 0);

  return totalCount;
};

export default useTotalCount;
