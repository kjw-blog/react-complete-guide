import CartIcon from '../Cart/CartIcon';
import Style from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <button className={Style.button}>
      <span className={Style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Style.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
