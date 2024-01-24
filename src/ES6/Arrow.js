import React, { Component } from 'react';

class MyComponent extends Component {
  // State can be initialized outside the constructor
  state = {
    counter: 0
  };

  // Arrow function for custom method
  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        {/* Arrow function used as an event handler */}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
