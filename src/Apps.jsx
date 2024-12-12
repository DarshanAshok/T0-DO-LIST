import React, { Component } from 'react';
import Button from './Button';  // Importing a button component

class Apps  extends Component {
  state = {
    name: '',  // Stores the user's name from the input field
    count: 0  // Tracks the number of button clicks
  };

  // Event handler for button click
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Event handler for input field change (name)
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // Event handler for form submission
  handleSubmit = (event) => {
    event.preventDefault();  // Prevent page reload on form submit
    alert(`Form submitted with name :${this.state.name}`);
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Handling</h1>

{/* A button with an event handler */}
<Button onClick={this.handleClick} count={this.state.count} />

{/* Form to handle user input */}
<form onSubmit={this.handleSubmit}>
  <input
    type="text"
    value={this.state.name}
    onChange={this.handleChange}  // Updates name on input change
    placeholder="Enter your name"
  />
  <button type="submit">Submit</button>
</form>
</div>
);
}
}

export default Apps;