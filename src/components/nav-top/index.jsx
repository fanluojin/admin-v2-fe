import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class TopNav extends Component {
    constructor(props) {
        super(props);
    }
    onLogout() {

    }
    render() {
        return (
            <nav className="navbar navbar-default top-navbar" role="navigation">
            <div className="navbar-header">
                {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button> */}
                <Link className="navbar-brand" to='/'><b>HAPPY</b>MALL</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" href="javascript:;">
                        <i className="fa fa-user fa-fw"></i>
                        <span>欢迎，adminxxx</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <a href="#" onClick={() => {
                                this.onLogout()
                            }}>
                                <i className="fa fa-sign-out fa-fw"></i>
                                <span>退出登录</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        )
    }
}

export default TopNav;