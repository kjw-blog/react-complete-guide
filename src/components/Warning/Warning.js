import Button from '../UI/Button';
import Card from '../UI/Card';
import Style from './Warning.module.css';

const Warning = (props) => {
  return (
    <div className={Style['warning-modal']}>
      <Card className={Style.warning}>
        <div className={Style.title}>Invalid input</div>
        <div className={Style.content}>
          <span>{props.text}</span>
          <Button className={Style.button} text="Okay" />
        </div>
      </Card>
    </div>
  );
};

export default Warning;
