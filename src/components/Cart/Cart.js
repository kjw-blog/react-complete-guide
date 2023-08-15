import Modal from '../UI/Modal';
import Style from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={Style['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={Style.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={Style.actions}>
        <button className={Style['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={Style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
