import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class Demo extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            data: 'old state'
        }
    }
    // 组件将要加载
    componentWillMount() {
        console.log('componentWillMount');
        
    }
    // 组件加载完毕
    componentDidMount() {
        console.log('componentDidMount');
    }
    // 接受父组件传过来的props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
        
    }
    // 子组件是不是应该更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    // 组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate');
        
    }
    // 组件更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate');
        
    }

    // 组件销毁时
    componentWillUnmount() {
        console.log('componentWillUnmount');
        

        
    }
    handleClick() {
        this.setState({
            data: 'new state'
        })
    }
    render() {
        console.log('render()');
        return (
            <div>
                <div>Props: {this.props.data}</div>
                <button onClick={() => {this.handleClick()}}>更新组件</button>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            data: 'old props',
            hasChild: true
        }
    }
    handleClick() {
        console.log('更新props');
        
        this.setState({
            data: 'new props'
        })
    }

    destoryComponent() {
        console.log('删除子组件');
        this.setState({
            hasChild: false
        })
        
    }

    render() {
        return (
            <div>
                {
                    this.state.hasChild ? <Demo data={this.state.data}/> : null
                }
                <button onClick={() => {this.handleClick()}}>改变属性</button>
                <button onClick={() => {this.destoryComponent()}}>删除子组件</button>

            </div>
        )
    }

}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)