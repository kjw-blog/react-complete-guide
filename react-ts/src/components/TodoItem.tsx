import React from 'react';

import Style from './TodoItem.module.css';
import Todo from '../models/todo';

type Props = {
  item: Todo;
  onDeleteTodo: (id: string) => void;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li
      className={Style.item}
      onClick={() => props.onDeleteTodo(props.item.id)}
    >
      {props.item.text}
    </li>
  );
};

export default TodoItem;
