import * as React from "react";
import "./footer.css";
import {Link} from "react-router-dom";




export const Footer = () => (
    <router>
        <footer id="footer">
    <button id="scrollToTopBtn">&#5169;</button>
    <Link to={"/"}  className="nav-copyright"> @SòniaMestre</Link>
    <ul className="nav-menu-footer">
        <li className="nav-item-footer">
            <Link smooth to={"/#About"} className="footer-nav-link">About</Link>
        </li>
        <li className="nav-item-footer">
            <Link to={"/skills"} className="footer-nav-link">Skills</Link>
        </li>
        <li className="nav-item-footer">
            <Link to={"/projects"}className="footer-nav-link">Projects</Link>
        </li>
        <li className="nav-item-footer">
            <Link to={"/blog"} className="footer-nav-link">Blog</Link>
        </li>
    </ul>
</footer>
    </router>
);