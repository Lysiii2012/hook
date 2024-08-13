import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import ButtonSmile from './components/ButtonSmile';
import ResultClick from './components/ResultClick';

const App = () => {

  const smileys = ["😊", "😂", "😍", "😎", "🤩"];

  const [counts, setCounts] = useState(() => {
    const savedCounts = JSON.parse(localStorage.getItem("counts"));
    return savedCounts || Array(5).fill(0);
  });
  const [showResult, setShowResult] = useState(false);

  const clickCount = (index) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      localStorage.setItem("counts", JSON.stringify(newCounts));
      return newCounts;
    });
    setShowResult(false);
  };

  const handleResultButtonClick = () => {
    setShowResult(prevShowResult => !prevShowResult);
  };

  const deleteResult = () => {
    localStorage.removeItem("counts");
    setCounts(Array(5).fill(0));
    setShowResult(false);
  };

  return (
    <div className="App">
      <Title title="Голосування за найкращій смайлик" type="first-title" />
      <ButtonSmile counts={counts} clickCount={clickCount} />
      <button className='show-result' onClick={handleResultButtonClick} style={{ opacity: showResult ? '0' : '1' }}>
        Показати результати
      </button>
      {showResult && (
        <>
          <Title title="Результати голосування" type="second-title" />
          <Title title="Переможець" type="third-title" />
          <ResultClick counts={counts} smileys={smileys} />
          <button onClick={deleteResult}>Очистити результати</button>
        </>
      )}
    </div>
  );
};

export default App;
