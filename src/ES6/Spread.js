import React, { useState } from 'react';

const MyComponent = () => {
  // Example state with multiple properties
  const [userInfo, setUserInfo] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    isAdmin: false
  });

  // Function to toggle admin status
  const toggleAdminStatus = () => {
    setUserInfo({
      ...userInfo,  // Spread existing properties
      isAdmin: !userInfo.isAdmin  // Update isAdmin property
    });
  };

  // Example array with multiple elements
  const originalArray = [1, 2, 3];

  // Function to add an element to the array
  const addElementToArray = () => {
    const newArray = [...originalArray, 4];
    console.log('New Array:', newArray);  // Log the new array
  };

  return (
    <div>
      <p>Username: {userInfo.username}</p>
      <p>Email: {userInfo.email}</p>
      <p>Is Admin: {userInfo.isAdmin ? 'Yes' : 'No'}</p>
      
      <button onClick={toggleAdminStatus}>Toggle Admin Status</button>

      <p>Original Array: {originalArray.join(', ')}</p>
      
      <button onClick={addElementToArray}>Add Element to Array</button>
    </div>
  );
};

export default MyComponent;
