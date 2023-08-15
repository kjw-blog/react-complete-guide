import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import Style from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={Style.button} onClick={props.onClick}>
      <span className={Style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
