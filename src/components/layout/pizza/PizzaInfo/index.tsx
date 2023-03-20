import React from 'react';

import styles from './PizzaInfo.module.scss';

interface IPizzaInfoProps {
  close: () => void;
}

export const PizzaInfo: React.FC<IPizzaInfoProps> = ({ close }) => {
  const pizzaRef = React.useRef(null);

  React.useEffect(() => {
    console.log('Инфо открыто');
    const closeModal = (event: any) => {
      if (!event.path.includes(pizzaRef.current)) {
        close();
      }
    };

    document.body.addEventListener('click', closeModal);

    return () => {
      document.body.removeEventListener('click', closeModal);
      console.log('Инфо закрыто');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container} ref={pizzaRef}>
      <h1>Pizza Info</h1>
    </div>
  );
};
