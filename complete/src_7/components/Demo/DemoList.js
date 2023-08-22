import React, { useMemo } from 'react';
import Style from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const sortList = useMemo(() => {
    console.log('memo', items);
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div className={Style.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
