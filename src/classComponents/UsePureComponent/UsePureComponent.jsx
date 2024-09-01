import React, { Component, PureComponent } from "react";

export default class UsePureComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <>
        {console.log("component is renderd")}
        <div>Count is {this.state.count}</div>
        <p>Propes value {this.props.value}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count });
          }}
        >
          click add count
        </button>
      </>
    );
  }
}
