import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

import Style from './Todos.module.css';

type Props = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={Style.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
