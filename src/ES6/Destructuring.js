import React from 'react';

const MyComponent = ({ prop1, prop2 }) => {
  return (
    <div>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
};

// Usage
const App = () => {
  const data = { prop1: 'Value 1', prop2: 'Value 2' };

  return <MyComponent {...data} />;
};
