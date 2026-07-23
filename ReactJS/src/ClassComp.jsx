import { Component } from "react";

// life cycle -> mounting, updating, unmounting


class App extends Component {

    state = { counter: 0 };

    increment = () => {
        this.setState(prev => {
            return { ...prev, counter: prev.counter + 1 }
        })
    }

    // Mounting
    componentDidMount = () => { // api calling
        console.log("Mounting phase");
    }

    // Updating
    componentDidUpdate = () => {
        console.log("Counter Updated");
    }

    // Unmounting
    componentWillUnmount = () => {
        console.log("Component Unmounted");
    }

    render() {
        return <div>
            <h1>React Component</h1>
            <div>Counter: {this.state.counter}</div>
            <br />
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}

export default App;