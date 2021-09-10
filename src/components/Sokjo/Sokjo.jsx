import * as React from "react";
import "./sokjo.css";
import {Link} from "react-router-dom";
import Sokjo07 from "../img/Sokjo-07.png";
import Sokjo06 from "../img/Sokjo-06.png";
import Sokjo03 from "../img/Sokjo-03.png";
import Sokjo04 from "../img/Sokjo-04.png";
import sokjomockup from "../img/sokjomockup.jpeg";
import Sokjonews2 from "../img/Sokjo-news.png";


export const Sokjo = () => (
    <div>
        <main className="Sokjoprojectintro">
            <div className="sokjointro">
                <h1 className="sokjo-title">Sokjo app</h1>
                <p className="sokjo-subtitle"> Banking app for kids</p>
                <p className="sokjo-subtitle"> January 2021</p>
                <p className="sokjo-text">I co-founded this project as COO and I design the architecture
                    and content of the pages and the user experience.</p>
            </div>
            <div className="Sokjo-main-img">
                <img className="Sokjo-main-image" src={Sokjo07} alt="Sokjo Dev Project"/>
            </div>
        </main>
        <section className="Sokjo-examples">
            <div>
                <img className="Sokjo06" src={Sokjo06} alt="Sokjo examples"/>
                <div className="textcontainer">
                    <h2 className="titleexamples">The project</h2>
                    <p className="textexamples">Kids and teens of Europe are limited to use cash in an
                        increasingly cashless society. Struggling to understand finances, when lacking
                        financial education.<br/>
                        Sokjo pretended to become the ultimate app to teach kids & teens about money and
                        entrepreneurialship. Kids would be able to ask their parents to send them money
                        and plan their weekly monthly allowances. Check their balance, make donations to
                        NGO and decide how much to spend or save. Also throught the app kids would be able
                        to finance their projects uploading a short video with and explanation of their
                        project and inviting their parents and family to co-finance it.</p>
                </div>
                <img className="Sokjo06" src={Sokjo03} alt="Sokjo examples"/>
                <div className="textcontainer">
                    <h2 className="titleexamples">The Challenge</h2>
                    <p className="textexamples">The challenge was to create a visual, simple and secure
                        bank app that would give parents confidence and would be easy for children to use.
                        From the first moment we focused on the users needs, accompanying them step by
                        step in the creation of an account, with precise instructions and a facial
                        recognition system. <br/>One of my tasks in this project was to design the architecture
                        of the app, define the style in order to make the app kids&teens friendly, write the
                        copies and coordinate the design team that was designing the template.
                        <br/>The result was the following Mock-Up:</p>
                </div>
                <img className="Sokjo06" src={Sokjo04} alt="Sokjo examples"/>
                <div className="textcontainer">
                    <h2 className="titleexamples">Mission accomplished</h2>
                    <p className="textexamples">The challenge was to create a visual, simple and secure
                        bank app that would give parents confidence and would be easy for children to use.
                        From the first moment we focused on the users needs, accompanying them step by
                        step in the creation of an account, with precise instructions and a facial
                        recognition system. <br/>One of my tasks in this project was to design the
                        architecture
                        of the app, define the style in order to make the app kids&teens friendly, write
                        the copies and coordinate the design team that was designing the template.
                        <br/>The result was the following Mock-Up:</p>
                </div>
                <div className="Sokjoprojectsuccess">
                    <a href="https://xd.adobe.com/view/01d648de-cb27-4bc7-63f9-ef0c27dcaea4-77e7/" target="_blank">
                        <img className="Sokjo07" src={sokjomockup} alt="Sokjo examples"/>
                    </a>
                    <a href="https://www.accio.gencat.cat/ca/serveis/banc-coneixement/cercador/BancConeixement/sokjo-banc-virtual-pels-mes-petits"
                        target="_blank">
                        <img className="Sokjo07" src={Sokjonews2} alt="Sokjo examples"/>
                    </a>

                </div>
            </div>
        </section>
    </div>
);
