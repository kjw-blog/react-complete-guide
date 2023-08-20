import Style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${Style.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
