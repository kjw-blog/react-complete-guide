import { useRef } from 'react';

import Style from './NewTodo.module.css';

type Props = { onAddTodo: (text: string) => void };

const NewTodo: React.FC<Props> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //  throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={Style.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
