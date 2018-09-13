import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// function Component1() {
//     return <h1>I am Rddddosen</h1>
// }

class ES6Component extends Component{
    constructor(props) {
        super(props);
        // console.log(this);
        
        // this.state = {
        //     name: 'Jerryyyyyyyyyyyyy'
        // }
    }

    render() {
        // setTimeout(() => {
        //     this.setState({
        //         name: 'Jerry Test'
        //     })
        // }, 2000);

        return <h1>I am {this.props.name} in es666666</h1>
    }
}

ReactDOM.render(
    <div>
        <ES6Component name="hello react" />
    </div>
   ,
    document.getElementById('app')
);




