import * as React from "react";
import "./home.css";
import face from "../img/face-Sonia.jpg";
import Sokjo from "../img/Sokjo_small.png";
import littlepress_small from "../img/littlepress_small.png";
import Mapit from "../img/Mapit.png";
import Eco2 from "../img/eco-home-small.png";
import {Link} from "react-router-dom";


export const Home = () => (
    <div>
        <main className="profile">
            <div className="profile-coder">
                <h1 className="profile-title"> - Coder - </h1>
                <p className="profile-details">FullStack Coder, specialising in UX & Front end.</p>
            </div>
            <div className="profile-image">
                <img className="face-img2" src={face} alt="Developer"/>
            </div>
            <div className="profile-entrepreneur">
                <h1 className="profile-title2">[ MBA ]</h1>
                <p className="profile-details2">Entrepreneur with 3 start-up intents willing for then next. </p>
            </div>
        </main>
        <section className="gallery">
            <h3>my latest work</h3>
            <ul id="thumbs1">
                <li className="works1">
                    <Link to={"/Econotravel"} style={{ textDecoration: 'none' }}>
                        <img className="photos1" src={Eco2} alt="Econotravel"/>
                        <div className="description">
                            <span className="arrow-r" />
                            <h4 className="text4">Econotravel web-app</h4>
                            <p>React + npm</p>
                        </div>
                    </Link>
                </li>
                <li className="works1">
                    <Link to={"/Sokjo"} style={{ textDecoration: 'none' }}>
                        <img className="photos1" src={Sokjo} alt="Sokjo App"/>
                        <div className="description">
                            <span className="arrow-r" />
                            <h4 className="text4">Sokjo App</h4>
                            <p>UX design</p>
                        </div>
                    </Link>
                </li>
                <li className="works1">
                    <Link to={"/LittlePress"} style={{ textDecoration: 'none' }}>
                        <img className="photos1" src={littlepress_small} alt="Littlepress App"/>
                        <div className="description">
                            <h4 className="text4">Littlepress App</h4>
                            <p>UX design & copies</p>
                        </div>
                    </Link>
                </li>

            </ul>

        </section>
    </div>
        )