// class components
// functional components
import { Component } from "react";
// variable -> manage data
// state -> An object, for managing data in a component

class App extends Component{

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         data: 0
    //     }
    // }

    state = {
        data: 10,
        counter: 0
    }

    handleClick = () => {
        this.setState({
            data: 20
        })
    }

    increment = (value) => {
        this.setState({ ...this.state, counter: this.state.counter + value })
    }

    decrement = () => {
        this.setState({ ...this.state, counter: this.state.counter - 1 });
    }

    render() {
        return <div>
            <div>State Data: {this.state.data}</div>
            <div>
                <button onClick={this.handleClick}>Update Val</button>
            </div>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Mango</li>
                <li>Orange</li>
            </ul>
            <div>
                counter: {this.state.counter}
                <button onClick={() => this.increment(10)}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        </div>
    }
}

export default App;