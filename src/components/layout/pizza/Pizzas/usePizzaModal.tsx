import { useCallback, useState } from 'react';
import { IPizzaItem } from '../../../../types/types';

const usePizzaModal = () => {
  const [isPizzaModalOpen, setIsPizzaModalOpen] = useState(false);
  const [pizzaModalData, setPizzaModalData] = useState<IPizzaItem | null>(null);

  const handlePizzaModalOpen = useCallback((data: IPizzaItem) => {
    setPizzaModalData(data);
    setIsPizzaModalOpen(true);
  }, []);

  const handlePizzaModalClose = useCallback(() => setIsPizzaModalOpen(false), []);

  return {
    isPizzaModalOpen,
    pizzaModalData,
    handlePizzaModalOpen,
    handlePizzaModalClose,
  };
};

export default usePizzaModal;
