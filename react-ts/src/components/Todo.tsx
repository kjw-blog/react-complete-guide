import React from 'react';
import TodoModel from '../models/todo';

const Todo: React.FC<{ item: TodoModel }> = (props) => {
  return <li>{props.item.text}</li>;
};

export default Todo;
