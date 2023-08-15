import CartIcon from '../Cart/CartIcon';
import Style from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={Style.button} onClick={props.onClick}>
      <span className={Style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Style.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
