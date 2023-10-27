import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

import Style from './Todos.module.css';

type Props = {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={Style.todos}>
      {props.items.map((item) => (
        <TodoItem onDeleteTodo={props.onDeleteTodo} key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
