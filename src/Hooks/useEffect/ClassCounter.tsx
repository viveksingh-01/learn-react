import React, { Component } from "react";

type State = {
  count: number;
  name: string;
};

class ClassCounter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount(): void {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): void {
    // Here, we are conditionally re-render the component
    // only if the user clicks the button and the count's value changes
    // and, not when the text-input value changes.
    if (this.state.count != prevState.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <h2>Using Class component.</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
        />
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
