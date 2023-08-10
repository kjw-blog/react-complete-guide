import { useRef, useImperativeHandle, forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // 컴포넌트 내부 함수를 명령어로 사용할 수 있게 하는 Hook으로 2개의 인수를 받는다.
  // 첫번째 인수는 forwardRef로 상위 컴포넌트에서 받아온 ref를 사용한다.
  // 두번째 인수는 해당 ref의 current에 넣어줄 함수를 object에 넣어준다.
  // 상위 컴포넌트에서 ref.current.focus(); 를 실행하면 activate함수가 실행됨.
  // ref를 사용한 명령형 코드는 지양해야하기때문에 자주 사용하면 안된다.

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
