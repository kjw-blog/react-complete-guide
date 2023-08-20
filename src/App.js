import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  // showParagraph 값이 바뀔때마다 컴포넌트가 재실행되면서 console이 찍힘
  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/**
       * showParagraph의 값이 바뀔때 마다 전체 DOM을 바꾸는게 아닌,
       * 가상의 DOM(Virtual DOM)에 리렌더링되고, 변경된 부분만 실제 DOM에 적용이 된다.
       * 개발자 도구의 요소를 보면 p태그가 보일때 p태그만 변경된 요소로 깜빡거리고
       * 사라질때 className="app"을 가진 div만 변경된 요소로 깜빡거림
       *  */}
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
