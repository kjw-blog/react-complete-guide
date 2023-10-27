import React from 'react';

import Style from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={Style.item}>{props.text}</li>;
};

export default TodoItem;
