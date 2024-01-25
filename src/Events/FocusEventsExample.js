import React from 'react';

const FocusEventsExample = () => {
  const handleFocus = () => {
    console.log('Input Focused!');
  };

  const handleBlur = () => {
    console.log('Input Blurred!');
  };

  return (
    <input onFocus={handleFocus} onBlur={handleBlur} />
  );
};

export default FocusEventsExample;
