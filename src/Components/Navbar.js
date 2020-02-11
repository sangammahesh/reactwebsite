import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Logo</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" wfd-id="11">
                            <span className="navbar-toggler-icon" wfd-id="8"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse" wfd-id="1" data-toggle="collapse" data-target=".navbar-collapse">
                            <ul className="navbar-nav ml-auto" wfd-id="3">
                                <li className="nav-item" wfd-id="6">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li className="nav-item" wfd-id="6">
                                    <Link className="nav-link" to="/About">About Us</Link>
                                </li>
                                <li className="nav-item" wfd-id="6">
                                    <Link className="nav-link" to="/Services">Services</Link>
                                </li>
                                <li className="nav-item" wfd-id="6">
                                    <Link className="nav-link" to="/Blogs">Blogs</Link>
                                </li>
                                <li className="nav-item" wfd-id="6">
                                    <Link className="nav-link" to="/Contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
