import React from 'react';

const KeyEventsExample = () => {
  const handleKeyDown = (event) => {
    console.log('Key Down:', event.key);
  };

  const handleKeyPress = (event) => {
    console.log('Key Pressed:', event.key);
  };

  const handleKeyUp = (event) => {
    console.log('Key Up:', event.key);
  };

  return (
    <input
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      placeholder="Type something..."
    />
  );
};

export default KeyEventsExample;
