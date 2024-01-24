import React from 'react';

const MyComponent = () => {
  // Example array of data
  const data = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* Using map() to render a list of elements */}
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
