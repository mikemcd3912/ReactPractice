import React from "react";
import {withRouter, Link, NavLink} from "react-router-dom";

function NavigationBar(props){
    return(
        <div className="navContainer">
            <nav class="navBar">
                <ul class="buttons">
                    <li class="nav-button">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav-button">
                        <Link to="/engineeringpjkts">Engineering Projects</Link>
                    </li>
                    <li class="nav-button">
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li class="nav-button">
                        <Link to="/aboutme">About Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(NavigationBar);