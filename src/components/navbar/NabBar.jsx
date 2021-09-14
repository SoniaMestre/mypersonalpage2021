import * as React from "react";
import "./navbar.css";
import logo from "../img/logo.png";
import {Link} from "react-router-dom";
import Git from "../img/GitHub.png";
import Lkdin from "../img/linkedin.png";


export const NavBar = () => (
    <router>
        <header className="header">
            <nav className="navBar">
                <Link to={"/"} >
                    <img className="nav-logo" src={logo} />
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link smooth to={"/About"} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/skills"} className="nav-link">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/projects"} className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/blog"} className="nav-link">Blog</Link>
                    </li>
                    <div className="nav-social">
                        <li className="social-item">
                            <a href="https://github.com/SoniaMestre"  target="_blank">
                                <img className="img-link" src={Git} />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://www.linkedin.com/in/sònia-mestre-nadal/"  target="_blank">
                                <img className="img-link" src={Lkdin} />
                            </a>
                        </li>
                    </div>
                </ul>

            </nav>
        </header>
    </router>
);
