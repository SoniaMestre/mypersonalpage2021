import * as React from "react";
import "./projects.css";
import mainprojects from "../img/main_projects.png";
import {Link} from "react-router-dom";
import Sokjo from "../img/Sokjo_small.png";
import littlepress from "../img/littlepress_small.png";
import Mapit from "../img/Mapit.png";



export const Projects = () => (
    <div>
        <main className="projectintro2">
            <div className="intro2">
                <h1 className="project-title2">Projects.</h1>
                <p className="project-subtitle2"> Check out my latest developing projects</p>
                <p className="project-text2">I've worked at start-ups, tech companies and corporates
                    on a range of different roles, including Business Developer, UX app design,
                    Copy and project manager.</p>
            </div>
            <div className="projectimage2">
                <img className="project-img2" src={mainprojects} alt="Programing Projects" />
            </div>
        </main>

<section className="grid-container3">
    <ul id="thumbs3">
        <li className="works3">
            <Link to={"/Sokjo"} style={{ textDecoration: 'none' }}>
                <img className="photos5" src={Sokjo} alt="Sokjo App"/>
                    <div className="description2">
                        <span className="arrow-r2" />
                        <h4>Sokjo App</h4>
                        <p>UX design</p>
                    </div>
            </Link>
        </li>
        <li className="works3">
            <Link to="/LittlePress" style={{ textDecoration: 'none' }}>
                <img className="photos5" src={littlepress} alt="Littlepress App" />
                    <div className="description">
                        <span className="arrow-r2"  />
                        <h4>Littlepress App</h4>
                        <p>UX design & copies</p>
                    </div>
            </Link>
        </li>
        <li className="works3">
            <Link to="/Mapit" style={{ textDecoration: 'none' }}>
                <img className="photos5" src={Mapit} alt="Mapit App" />
                    <div className="description">
                        <span className="arrow-r2" />
                        <h4>Mapit App</h4>
                        <p>New business developer</p>
                    </div>
            </Link>
        </li>
    </ul>
</section>
</div>
);