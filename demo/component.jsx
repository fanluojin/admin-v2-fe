import React, {Component} from 'react'
import ReactDOM from 'react-dom'



class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: 'Rosenaaaa',
            age: 18
        };
        // this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        console.log('click');
        this.setState({
            age: this.state.age + 1
        });
    }
    // handleClick() {
    //     console.log('click');
    //     this.setState({
    //         age: this.state.age + 1
    //     });
    // }

    handleChange(e) {
        this.setState({
            age: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={() => {this.handleClick()}}>addAge</button>
                <input type="text" onChange={(e) => {this.handleChange(e)}}/>
            </div>
        )
    }
}
class Title extends Component{
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <h1>{this.props.children}</h1>
        )
    }
}

class Demo extends Component{
    render() {
        return (
            <div className="">
            <Title>
                <span>hi heloo</span>
                <a href="">link</a>
            </Title>
            <hr/>
                <App />
            </div>
        )
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('app')
)




