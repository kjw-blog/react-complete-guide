import React from 'react';

import Style from './TodoItem.module.css';
import Todo from '../models/todo';

type Props = {
  text: string;
  onRemoveTodo: () => void;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li className={Style.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
