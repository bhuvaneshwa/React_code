import React from 'react';

const DoubleClickExample = () => {
  const handleDoubleClick = () => {
    console.log('Double Clicked!');
  };

  return (
    <button onDoubleClick={handleDoubleClick}>Double click me</button>
  );
};

export default DoubleClickExample;
