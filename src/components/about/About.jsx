import * as React from "react";
import "./about.css";
import face from "../img/face-Sonia.jpg";
import office from "../img/office.jpeg";
import vaixell from "../img/vaixell.jpg";
import volei from "../img/volei.jpg";
import burriac  from "../img/burriac.jpg";
import graphic  from "../img/graphic.png";




export const About = () => (
    <router>
        <main className="projectintro">
            <div className="intro">
                <h1 className="project-title">About.</h1>
                <p className="project-subtitle"> I am Full Stack Developer based in El Maresme, known as the Catalonia's little California</p>
                <p className="project-text">I like to make things simple and be part of challenging projects. In my personal time, you'll find me in outdoor activities.
                </p>
            </div>
            <div className="profile-image">
                <img className="face-img" src={face} alt="Developer" />
            </div>
        </main>

<section className="gallery">
    <ul id="thumbs">
        <li className="works">
            <img className="photos" src={office} alt="Dev Office" />
        </li>
        <li className="works">
            <img className="photos" src={vaixell} alt="ship" />
        </li>
        <li className="works">
            <img className="photos" src={volei} alt="beach volei" />
        </li>
        <li className="works">
            <img className="photos" src={burriac} alt="burriac castle" />
        </li>
        <li className="works">
            <img className="photos" src={burriac} alt="beach volei" />
        </li>
    </ul>
</section>
<section className="skills">
    <div className="part-entrepreneur">
        <h1 className="entrepreneur-title">Part entrepreneur</h1>
        <p className="entrepreneur-list">Business Developer <br/> Lean Startup<br/> Product Owner<br/> Agile<br/> Confluence/Jira/AirFocus</p>
    </div>
    <div className="profile-image">
        <img className="face-img" src={graphic} alt="Skills" />
    </div>
    <div className="part-entrepreneur">
        <h1 className="entrepreneur-title">Part Coder</h1>
        <p className="entrepreneur-list">Full Stack <br/> HTML/CSS/JS/React <br/> NPM/TDD/GitHub<br/> Java/Mongo/SQL/Docker<br/> GitHub/Git/Figma/Shell</p>
    </div>
</section>

</router>
)