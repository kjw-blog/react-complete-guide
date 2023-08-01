import Style from './InputGroupCard.module.css';

const InputGroupCard = ({ children }) => {
  return <div className={Style['input-group']}>{children}</div>;
};

export default InputGroupCard;
