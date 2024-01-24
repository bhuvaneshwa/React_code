// ExampleComponent.jsx
import React from 'react';
import styled from 'styled-components';

// Creating a styled component
const StyledDiv = styled.div`
  background-color: lightblue;
  padding: 10px;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: darkblue;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: navy;
  }
`;

const ExampleComponent = () => {
  return (
    <StyledDiv>
      <h2>This is a styled component</h2>
      <p>Styled with Styled Components library</p>
      <StyledButton>Click me</StyledButton>
    </StyledDiv>
  );
};

export default ExampleComponent;
