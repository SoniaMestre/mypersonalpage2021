import * as React from "react";
import "./blog.css";
import codingbootcamp from "../img/codingbootcamp.jpg";
import languages from "../img/languages.jpg";
import IMIN from "../img/IMIN.png";
import nervous from "../img/nervous.jpeg";

export const Blog = () => (
    <div>
        <div className="header2">
            <img className="imgslider" src={codingbootcamp} alt="BootCamp"/>
            <h2 className="blogtitle">My experience in a programing BootCamp</h2>
        </div>

        <div className="row">
            <div className="leftcolumn">
                <div className="card">
                    <img className="imgblog" src={languages} alt="BootCamp"/>
                    <h2 class="titletextblog">Oh my God!</h2>
                    <h5>April 2021</h5>
                    <p className="textblog">FHTML, CSS, Javascrip, IntelliJ, GitHub, Repository ... is it Latin?
                        Ancient Greek? Cyrillic? Welcome to the world of programming!
                        I have calculated a minimum of 100 new words per day, this means 2000 words
                        in a month, not counting the specific syntax of each programming language.
                        Saturated, surpassed? Of course. But also eager to learn and confident in
                        getting through this moment.</p>
                </div>
                <div className="card">
                    <img className="imgblog" src={IMIN} alt="BootCamp"/>
                    <h2 className="titletextblog">I am in!</h2>
                    <h5>March 2021</h5>
                    <p className="textblog">Few interviews, one working group on Zoom, thousand doubts
                        in mind and a verdict: I have been selected! There is no way back,
                        it is done: At my 45 I am going to reinvent myself and get on the technology train.
                        Now it's time to free myself from fears, doubts and uncertainties..</p>
                </div>
                <div className="card">
                    <div className="card">
                        <img className="imgblog" src={nervous} alt="BootCamp reaction"/>
                        <h2 className="titletextblog">Will they pick me?</h2>
                        <h5>March 2021</h5>
                        <p className="textblog">I have no idea of programming, I'm not even on social media!
                            Programming sounds like something impossible to me!
                            Will there be many requests? Will I be good at programming?
                            Is it a good investment for my future? Will I capable to become a coder?
                            Doubts, doubts and more doubts... This was a feeling that
                            I had to befriend and deal with from the moment I found the opportunity
                            to apply to the F5 BootCamp until I was selected.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );