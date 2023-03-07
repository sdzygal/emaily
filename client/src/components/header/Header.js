import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments";
import {BiSearch, BiExitFullscreen} from "react-icons/bi";
import {RiToggleLine} from "react-icons/ri";


import "./header.css";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return   <li>
                    <a href="/auth/google">Login with Google</a>
                         </li>
            default:
                return [
                    <li key="6" className="search">
                        <input type="text" placeholder="Search..." />
                        <BiSearch className="searchIcon" />
                    </li>,
                    <li key="4" className="icon"><RiToggleLine /></li>,
                    <li key="5" className="icon"><BiExitFullscreen /></li>,
                    <li key="1"><Payments /></li>,
                    <li key="3" className="credits">Credits: {this.props.auth.credits}</li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];

        }
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);