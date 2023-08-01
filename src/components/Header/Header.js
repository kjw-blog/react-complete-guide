import Style from './Header.module.css';

import logo from '../../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <header className={Style.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
