import * as React from "react";
import "./mapit.css";
import {Link} from "react-router-dom";
import mapit01 from "../img/mapit01.png";
import mapit02 from "../img/mapit02.png";
import mapit03 from "../img/mapit03.jpeg";
import mapit04 from "../img/mapit04.jpeg";
import mapit05 from "../img/mapit05.png";
import mapit06 from "../img/mapit06.jpeg";





export const Mapit = () => (
    <div>
        <main className="mapitprojectintro">
            <div className="mapitintro">
                <h1 className="mapit-title">Mapit tracker</h1>
                <p className="mapit-subtitle"> Motorcycle GPS tracker</p>
                <p className="mapit-subtitle"> octuber 2020</p>
                <p className="mapit-text">Mapit connects your mobile with your motorcycle. Real-time location,
                    motion alerts, usage and mileage.</p>
            </div>
            <div className="mapit-main-img">
                <img className="mapit-main-image" src={mapit01} alt="mapit Project"/>
            </div>
        </main>
        <section className="mapit-examples">
            <div>
                <img className="mapit06" src={mapit02} alt="mapit examples"/>
                <div className="textcontainermapit">
                    <h2 className="titleexamplesmapit">Mission</h2>
                    <p className="textexamplesmapit">My mission in Mapit was to develop new business opportunities
                        inside and outside of motorcycle sector. I carried out a study of the motorcycle sector at
                        a national and international level to detect growth opportunities at a national and international level.</p>
                </div>
                <img className="mapit06" src={mapit03} alt="mapit examples"/>
                <div className="textcontainermapit">
                    <h2 className="titleexamplesmapit">Business Opportunities</h2>
                    <p className="textexamplesmapit">I proposed new business opportunities to diversify clients,
                        consolidate technology and obtain income growth with minimal investment.
                    </p>
                </div>
                <img className="mapit06" src={mapit04} alt="mapit examples"/>
                <div className="textcontainermapit">
                    <h2 className="titleexamplesmapit">New app services </h2>
                    <p className="textexamples">
                        Another task was to propose new functionalities for the users of the Mapit app. For example,
                        offering a motorcycle cleaning service through the app, creating a marketplace of products
                        for motorcyclists and sharing routes taken.</p>
                </div>
                <div className="mapitprojectsuccess">
                    <Link to={"https://xd.adobe.com/view/01d648de-cb27-4bc7-63f9-ef0c27dcaea4-77e7/"} target="_blank">
                        <img className="mapit07" src={mapit05} alt="mapit examples"/>
                    </Link>
                    <Link to="https://www.accio.gencat.cat/ca/serveis/banc-coneixement/cercador/BancConeixement/sokjo-banc-virtual-pels-mes-petits">
                        <img className="mapit07" src={mapit06} alt="mapit examples"/>
                    </Link>



                </div>
            </div>
        </section>
    </div>
);
