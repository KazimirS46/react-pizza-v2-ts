import { Link } from 'react-router-dom';

import styles from './CartEmpty.module.scss';
import emptyCart from '../../../../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <div className={styles.empty}>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt='Empty cart' />
      <Link to='/react-pizza-v2-ts/' className={styles.buttonBlack}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
