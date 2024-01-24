// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  // Data to be passed as props
  const message = 'Hello from Parent!';

  return (
    <div>
      {/* Passing data to the child component using props */}
      <ChildComponent message={message} />
    </div>
  );
}

// ChildComponent.jsx
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      {/* Accessing the data passed as props */}
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
