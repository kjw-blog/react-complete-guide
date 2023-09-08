import { useCallback, useContext, useEffect, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import InfoForm from './InfoForm';
import useFetch from '../hooks/useFetch';

const Cart = (props) => {
  const { isLoading, error, onFetch } = useFetch();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const userInfoHandler = useCallback(({ name, email }) => {
    setUserInfo({ name, email });
  }, []);

  const formIsValidHandler = useCallback((formFlag) => {
    setFormIsValid(formFlag);
  }, []);

  const orderHandler = () => {
    const orderDataHandler = (data) => {
      alert('주문 완료 !');
      cartCtx.resetItem();
      props.onClose();
    };

    onFetch(
      {
        url: 'orders',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: { ...userInfo, orders: cartCtx.items },
      },
      orderDataHandler
    );
  };

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  let orderButton;

  if (hasItems) {
    orderButton = (
      <button
        disabled={!formIsValid}
        onClick={orderHandler}
        className={classes.button}
      >
        Order
      </button>
    );
  }

  if (isLoading) {
    orderButton = (
      <button className={classes.button} disabled={true}>
        로딩중...
      </button>
    );
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <InfoForm setUser={userInfoHandler} formValidate={formIsValidHandler} />
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {orderButton}
      </div>
    </Modal>
  );
};

export default Cart;
