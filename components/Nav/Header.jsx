import React, { Component } from 'react'

class Header extends Component {
    
    render() {
        return (
            <div className="header">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="d">Active link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="d">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="d">Disabled link</a>
                    </li>
                </ul>   
            </div>
        )
    }
}

export default Header
