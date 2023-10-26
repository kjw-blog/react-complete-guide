import React from 'react';
import TodoModel from '../models/todo';
import Todo from './Todo';

const Todos: React.FC<{ items: TodoModel[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
