import React from 'react';

const MouseEventsExample = () => {
  const handleMouseOver = () => {
    console.log('Mouse Over');
  };

  const handleMouseOut = () => {
    console.log('Mouse Out');
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Hover me
    </div>
  );
};

export default MouseEventsExample;
