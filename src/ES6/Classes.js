import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    // State can be initialized in the constructor
    this.state = {
      counter: 0
    };

    // Binding methods to the instance
    this.handleClick = this.handleClick.bind(this);
  }

  // Custom methods
  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
