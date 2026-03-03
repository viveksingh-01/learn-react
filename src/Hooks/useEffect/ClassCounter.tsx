import React, { Component } from "react";

type State = {
  count: number;
};

class ClassCounter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): void {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <h2>Using Class component.</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
      </div>
    );
  }
}

export default ClassCounter;

// In class based components, we need to re-write the same piece of code
// in componentDidMount as well as componentDidUpdate.
// useEffect can solve this issue by combining the functionalities of both the lifecycle methods
// and allows us to keep the related logic in a single block.
