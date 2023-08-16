import { useContext } from 'react';
import Modal from '../UI/Modal';
import Style from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={Style['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={Style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Style.actions}>
        <button className={Style['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={Style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
