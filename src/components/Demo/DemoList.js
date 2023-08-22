import React from 'react';
import Style from './DemoList.module.css';

const DemoList = (props) => {
  const items = props.items.sort((a, b) => a - b);

  const demoList = items.map((item) => <li key={item}>{item}</li>);

  return (
    <div className={Style['demo-wrap']}>
      <h3>{props.title}</h3>
      <ul>{demoList}</ul>
    </div>
  );
};

export default React.memo(DemoList);
