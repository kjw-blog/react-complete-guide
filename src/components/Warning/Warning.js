import Button from '../UI/Button';
import Card from '../UI/Card';
import Style from './Warning.module.css';

const Warning = (props) => {
  const backgroundClickHandler = (e) => {
    if (e.target.id === 'modal-background') {
      props.close();
    }
  };

  return (
    <div
      onClick={backgroundClickHandler}
      id="modal-background"
      className={Style['warning-modal']}
    >
      <Card className={Style.warning}>
        <div className={Style.title}>Invalid input</div>
        <div className={Style.content}>
          <span>{props.text}</span>
          <Button onClick={props.close} className={Style.button} text="Okay" />
        </div>
      </Card>
    </div>
  );
};

export default Warning;
