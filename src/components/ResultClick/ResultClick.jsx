import React from "react";

const ResultClick = ({ counts, smileys }) => {

  const getMaxSmiley = () => { 
    const maxCount = Math.max(...counts);
    const maxIndex = counts.indexOf(maxCount);
    return { smiley: smileys[maxIndex], count: maxCount };
  };
 
  const { smiley, count } = getMaxSmiley(); 

  return (
    <div className="result-container"> 
      <div>{smiley} </div>
      <div>Кількість голосів {count}</div>
    </div>
    ); 
}

export default ResultClick;