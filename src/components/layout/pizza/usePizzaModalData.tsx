import { useState } from 'react';
import { IPizzaItem } from '../../../types/types';

const usePizzaModalData = () => {
  const [isPizzaModalOpen, setIsPizzaModalOpen] = useState<boolean>(false);
  const [pizzaModalData, setPizzaModalData] = useState<IPizzaItem | null>(null);

  const handlePizzaModalOpen = (data: IPizzaItem) => {
    setPizzaModalData(data);
    setIsPizzaModalOpen(true);
  };
  const handlePizzaModalClose = () => {
    setIsPizzaModalOpen(false);
  };
  return {
    isPizzaModalOpen,
    pizzaModalData,
    handlePizzaModalClose,
    handlePizzaModalOpen,
  };
};

export default usePizzaModalData;
