import Button from '../UI/Button';
import Card from '../UI/Card';
import Style from './Warning.module.css';

const Warning = () => {
  return (
    <div className={Style['warning-modal']}>
      <Card className={Style.warning}>
        <div className={Style.title}>Invalid input</div>
        <div className={Style.content}>
          <span>경고문구</span>
          <Button className={Style.button} text="Okay" />
        </div>
      </Card>
    </div>
  );
};

export default Warning;
