import React from 'react';

const FormSubmitExample = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmitExample;
