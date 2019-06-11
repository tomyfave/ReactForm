import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "hello",
    password: "world"
  };

  myFunction = event => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(event.target.name)
    // console.log(event.target.value)

    this.setState({
      // username:event.target.value
      [name]: value
    });
  };

  handleClick = event => {
    const message = `${this.state.username} / ${this.state.password}`;
    window.alert(message);
  };

  render = () => {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>Save</button>
        </div>
        <div>
          {this.state.username}
          &nbsp;
          {this.state.password}
        </div>
        <div>
          <input
            name="username"
            value={this.state.username}
            onChange={this.myFunction}
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.myFunction}
          />
        </div>
      </div>
    );
  };
}

export default Form;
