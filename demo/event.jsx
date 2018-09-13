import React, {Component} from 'react'
import ReactDOM from 'react-dom'



class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: 'Rosenaaaa',
            age: 18
        };
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        console.log('click');
        this.setState({
            age: this.state.age + 1
        });
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={this.handleClick}>addAge</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)




