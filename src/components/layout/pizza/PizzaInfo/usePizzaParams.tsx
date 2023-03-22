import { useState } from 'react';
import { IActiveSize, IActiveType } from '../../../../redux/slices/cartSlice';

const usePizzaParams = (
  types: IActiveType[],
  sizes: IActiveSize[],
  productId: number,
  price: number
) => {
  const [activeType, setActiveType] = useState<IActiveType>(types[0]);
  const [activeSize, setActiveSize] = useState<IActiveSize>(sizes[0]);
  const [changeID, setChangeID] = useState<number>(productId);
  const finalPrice = price + activeType.price + activeSize.price;

  return {
    activeSize,
    activeType,
    changeID,
    finalPrice,
    setActiveType,
    setActiveSize,
    setChangeID,
  };
};

export default usePizzaParams;
