import mealsImage from '../../assets/meals.jpg';
import Style from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={Style.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={Style['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
