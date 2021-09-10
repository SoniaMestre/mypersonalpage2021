import * as React from "react";
import "./skills.css";
import logotiphtml from "../img/logohtml.png";
import logotipcss from "../img/logocss.png";
import logotipjs from "../img/logoJS.png";
import logotipreact from "../img/react.png";
import logotipjava from "../img/logojava.jpeg";
import logotipsql from "../img/logosql.png";
import logotipbootstrap from "../img/logobootstrap copia.png";
import logotipnpm from "../img/logonpm.png";
import logotipdocker from "../img/logodocker.png";
import logotipmongo from "../img/logomongo.png";
import logotipscrum from "../img/logoscrum.png";
import logotipconfluence from "../img/logoconfluence.png";
import logotipjira from "../img/logojira.png";
import logotipairfocus from "../img/logoairfocus";
import logotiptrello from "../img/logotrello.jpeg";
import logotipteam from "../img/logoteam.png";
import logotipclient from "../img/logoclient.jpg";
import logotipbusiness from "../img/logobusiness.jpeg";
import logotiplean from "../img/logolean.jpeg";
import logotipagile from "../img/logoagile.png";
import logotipcreativity from "../img/creativity.jpeg";
import logotiprestless from "../img/logorestless.jpg";
import logotipsolving from "../img/logosolving.jpeg";
import logotipadaptation from "../img/logoadaptation.jpeg";
import logotipstrategy from "../img/logostrategy.png";
import logotipempathy from "../img/logoempathy.png";



export const Skills = () => (

        <main className="collections">
            <section className="sectioncontainer">
            <h1 className="titlestacks"> Developer Skills</h1>
            <h4 className="Stacks">Stacks & Libraries</h4>

            <div className="area">
                        <div className="img-container">
                            <img className="imglogos" src={logotiphtml} alt="logo HTML" />
                            <h6 className="subtitlestacks"> HTML</h6>
                        </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipcss} alt="logo CSS" />
                        <h6 className="subtitlestacks"> CSS</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipjs} alt="logo js" />
                        <h6 className="subtitlestacks"> JavaScript</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipreact} alt="logo react" />
                        <h6 className="subtitlestacks"> React</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipjava} alt="logo java" />
                        <h6 className="subtitlestacks"> Java</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipsql} alt="logo SQL" />
                        <h6 className="subtitlestacks"> SQL</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipmongo} alt="logo mongodb" />
                        <h6 className="subtitlestacks"> MongoDB</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipbootstrap} alt="logo bootstrap" />
                        <h6 className="subtitlestacks"> Bootstrap</h6>
                    </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipnpm} alt="logo npm" />
                    <h6 className="subtitlestacks"> npm</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipdocker} alt="logo docker" />
                    <h6 className="subtitlestacks"> Docker</h6>
                </div>
            </div>
            </section>

            <section className="sectioncontainer">
            <h1 className="titlestacks"> Business Skills</h1>
            <h4 className="Stacks">Tools & knowledge</h4>
            <div className="area">
                <div className="img-container">
                    <img className="imglogos" src={logotipagile} alt="logo agile" />
                    <h6 className="subtitlestacks"> Agile</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipscrum} alt="logo scrum" />
                    <h6 className="subtitlestacks"> Scrum</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipconfluence} alt="logo confluence" />
                    <h6 className="subtitlestacks"> Confluence</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipjira} alt="logo jira" />
                    <h6 className="subtitlestacks"> Jira</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipairfocus} alt="logo airfocus" />
                    <h6 className="subtitlestacks"> Airfocus</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotiptrello} alt="logo trello" />
                    <h6 className="subtitlestacks"> Trello</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipteam} alt="logo team" />
                    <h6 className="subtitlestacks"> Team Player</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipclient} alt="logo client" />
                    <h6 className="subtitlestacks"> Client dialog</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotipbusiness} alt="logo business" />
                    <h6 className="subtitlestacks"> BusinessDev</h6>
                </div>
                <div className="img-container">
                    <img className="imglogos" src={logotiplean} alt="logo lean startupr" />
                    <h6 className="subtitlestacks"> Lean startup</h6>
                </div>
            </div>
            </section>

            <section className="sectioncontainer">
                <h1 className="titlestacks"> Soft Skills</h1>
                <h4 className="Stacks">Personality</h4>

                <div className="area">
                    <div className="img-container">
                        <img className="imglogos" src={logotipcreativity} alt="logo creativity" />
                        <h6 className="subtitlestacks"> Creativity</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotiprestless} alt="logo restless" />
                        <h6 className="subtitlestacks"> Restless</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipsolving} alt="logo solving" />
                        <h6 className="subtitlestacks"> Problem Solving</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipadaptation} alt="logo adaptation" />
                        <h6 className="subtitlestacks"> Quick Adaptation</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipstrategy} alt="logo strategy" />
                        <h6 className="subtitlestacks"> Strategy</h6>
                    </div>
                    <div className="img-container">
                        <img className="imglogos" src={logotipempathy} alt="logo empathy" />
                        <h6 className="subtitlestacks"> Empathy</h6>
                    </div>

                </div>
            </section>

        </main>


)