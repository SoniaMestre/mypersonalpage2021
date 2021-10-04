import * as React from "react";
import "./econotravel.css";
import ReactPlayer from "react-player";
import econotravel01 from "../img/eco-movil2.png";
import econotravel03 from "../img/Eco-laptop.png";
import econotravel04 from "../img/Figma-econotravel.png";
import {Link} from "react-router-dom";
import econotravel05 from "../img/eco-tablet.png";
import econotravel06 from "../img/eco-tablet2.png";


export const Econotravel = () => (
    <div>
        <main className="econotravelprojectintro">
            <div className="econotravelintro">
                <h1 className="econotravel-title">Econotravel</h1>
                <p className="econotravel-subtitle"> Web-app</p>
                <p className="econotravel-subtitle2"> July 2021</p>
                <p className="econotravel-text">Econotravel offers eco-friendly touristic experiences around Barcelona
                    since 2003. The principal priority of the agency is the respect for the nature. After almost two
                    decades functioning with a webside developed in Java, SQL, HTML and CSS, Econotravel wants to jump
                    towards modernization and upload their front-end with React framework.</p>
            </div>
            <div className="econotravel-main-img">
                <img className="econotravel-main-image" src={econotravel01} alt="Econotravel Project"/>
            </div>
        </main>
        <section className="econotravel-examples">
            <div>
                <div className="react-wrapper">
                <ReactPlayer
                    className="react-player"
                url="https://youtu.be/o4SpaQUTH3g"
                    width="59rem"
                    height="34rem"
                             controls
                />
                </div>
                <div className="textcontainereconotravel">
                    <h2 className="titleexampleseconotravel">The Challenge</h2>
                    <p className="textexampleseconotravel">Our duty was to create an attractive design of the front-end
                        with a friendly user experience. Front-end requirements:
                        -	Tool bar with link to the main sections of the web (Home, Experiences, Booking and Who we are).
                        -	Experience section containing card format with images and information about services.
                        -	Book form in order to allow the user to send a book request about the selected activity.
                        -	A “Who we are” page, including info about the Company and the team.
                        -	A search bar to look for activities by its name.
                        -	Filter buttons to find out activities by its name and type of activity (mountain, beach or city).
                        </p>
                </div>
                <img className="econotravel06" src={econotravel03} alt="econotravel examples"/>
                <div className="textcontainereconotravel">
                    <h2 className="titleexampleseconotravel">Design</h2>
                    <p className="textexampleseconotravel">There were no instructions from the client in that field.
                        Their only requirement was visibility of the logo and to be able to offer a clear UX.
                        We use Figma to develop a simple, clean and a friendly-UX draft. Green and yellow were the
                        colors that we selected due these colors remind us nature and fits with Econotravel logo.
                        We also use some bootstrap library to create carrousels and product cards. And add some
                        hovers and animations to achieve a smooth navigation.
                    </p>
                </div>
                <img className="econotravel06" src={econotravel04} alt="econotravel examples"/>
                <div className="textcontainereconotravel">
                    <h2 className="titleexampleseconotravel">React + webpack + npm + bootstrap </h2>
                    <p className="textexamples">
                        We create a Spring Boot Project architecture, IntelliJ as a IDE and React with different
                        components in order to achieve a clean code. We also use npm and bootstrap to design some
                        product cards and in order to implement different dependencies.</p>
                </div>
                <div className="econotravelprojectsuccess">
                   <img className="econotravel07" src={econotravel05} alt="econotravel examples"/>
                   <img className="econotravel07" src={econotravel06} alt="econotravel examples"/>
                </div>
            </div>
        </section>
    </div>
);
