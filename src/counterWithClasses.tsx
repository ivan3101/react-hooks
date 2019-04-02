import React, {Component, MouseEventHandler} from 'react';

export interface CounterWithClassesState {
    counter: number
}

class CounterWithClasses extends Component<{}, CounterWithClassesState> {

    state: CounterWithClassesState = {
        counter: 0
    };

    onAddCount: MouseEventHandler<HTMLButtonElement> = (): void => {
      this.setState((prevState: CounterWithClassesState) => ({
          counter: ++prevState.counter
      }))
    };

    render() {
        return (
            <div>
                <h4>Counter with Classes</h4>
                <p>
                    <button onClick={this.onAddCount}>Click to increment count</button>
                    {" "}
                    <span>Count: {this.state.counter}</span>
                </p>
            </div>
        );
    }
}

export default CounterWithClasses;