import * as React from "react";
import "./littlePress.css";
import {Link} from "react-router-dom";
import littlepress01 from "../img/LilPress01.png";
import littlepress02 from "../img/LilPress02.png";
import littlepress03 from "../img/LilPress03.png";
import littlepress04 from "../img/LilPress04.png";
import littlepress05 from "../img/LilPress05.png";
import littlepress06 from "../img/LilPress06.png";


export const LittlePress = () => (
    <div>
        <main className="littlepressprojectintro">
            <div className="littlepressintro">
                <h1 className="littlepress-title">Lilpress app</h1>
                <p className="littlepress-subtitle"> Newspaper app for kids</p>
                <p className="littlepress-subtitle"> January 2019</p>
                <p className="littlepress-text">Little Press is a project awarded with "Best business Idea" by Tecnocampus
                    University, that a friend and I created seeing the lack of newspapers in the world aimed to kids. I enjoyed the
                    challenge of develop the idea and the BP and become the CEO.</p>
            </div>
            <div className="littlepress-main-img">
                <img className="littlepress-main-image" src={littlepress01} alt="littlepress Dev Project"/>
            </div>
        </main>
        <section className="littlepress-examples">
            <div>
                <img className="littlepress06" src={littlepress02} alt="littlepress examples"/>
                <div className="textcontainerlittlepress">
                    <h2 className="titleexampleslittlepress">The App</h2>
                    <p className="textexampleslittlepress">Little Press wants to introduce children to the habit of
                        reading the press. It is also a useful work tool for schools that are increasingly oriented
                        towards the Learning by doing system.</p>
                </div>
                <img className="littlepress06" src={littlepress03} alt="littlepress examples"/>
                <div className="textcontainerlittlepress">
                    <h2 className="titleexampleslittlepress">Be informed</h2>
                    <p className="textexampleslittlepress">Little Press talks about current global issues in a simple
                        and neutral way. We publish news daily news of current affairs like  technology, culture,
                        sports and infographics with current topics such as Brexit, the Blocchain, climate change, etc.
                        </p>
                </div>
                <img className="littlepress06" src={littlepress04} alt="littlepress examples"/>
                <div className="textcontainerlittlepress">
                    <h2 className="titleexampleslittlepress">Interesting and funny!</h2>
                    <p className="textexamples">Little press is not just a newspaper app. The architecture of the
                        application is designed to give the reader a sense of gamming. For each reading and test
                        completed, the reader receives points, which he can also share with his school and take
                        part in a competition between schools to see which school has the most informed students!
                        In addition, the colorful design, full of illustrations, help children to read.</p>
                </div>
                <div className="littlepressprojectsuccess">
                    <Link to={"https://xd.adobe.com/view/01d648de-cb27-4bc7-63f9-ef0c27dcaea4-77e7/"} target="_blank">
                        <img className="littlepress07" src={littlepress05} alt="littlepress examples"/>
                    </Link>
                    <Link to="https://www.accio.gencat.cat/ca/serveis/banc-coneixement/cercador/BancConeixement/sokjo-banc-virtual-pels-mes-petits">
                        <img className="littlepress07" src={littlepress06} alt="littlepress examples"/>
                    </Link>



                </div>
            </div>
        </section>
    </div>
);
