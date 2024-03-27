import React from "react";
import styles from './aboutme.module.css';
import RippleBadge from "./RippleBadge";

function AboutMe() {

    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutHeader}>
                <div className={styles.aboutHeadText}>
                    <h1>Sean Brown</h1> 
                    <h4>Web Designer</h4> 
                    <h4>Software Developer</h4> 
                    <RippleBadge />
                </div>
                <div className={styles.pfpContainer}>
                    <img className={styles.pfp} src="./images/pfp.jpeg" alt="Profile picture of a handsome dude" />
                </div>
            </div>
            <div className={styles.aboutContent}>
                <p>
                    Hey there! I'm Sean, a computer scientist and software developer. 
                    I attended <b>Portland State University</b> where I developed a healthy foundation in Computer Science. 
                    I spend my free time in the garage, on my SV650, or in the kitchen!
                </p>
                <p>
                    My journey <i>really</i> started when I was a wee lad, messing around with Windows batch files, 
                    but that's a story for another day.
                </p>
                <p>
                    I was most recently employed as an Assistant Manager at Discount Tire in Tigard, Oregon.
                    In December 2023, I set out to finish what I started years ago: my path to becoming a Full Stack
                    Web Developer. Ever since then, building on my knowledge from <b>PSU</b>, I've 
                    been <b>educating myself</b> full-time.
                </p>
                <p>
                    While technology of any kind fascinates me, I've been repeatedly drawn to the discipline of 
                    Computer Science. In my formative years, I taught myself to 
                    make <b>chat clients, games, game engines, and mobile applications</b> &#40;I've also fantastic
                    stories of handmade radios and a bench power supply&#41;.
                </p>
            </div>
            <div className={styles.aboutNav}>
                <a href="https://github.com/SBSoftwareDev">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://stackoverflow.com/users/3557315/">
                    <i className="fa-brands fa-stack-overflow"></i>
                </a>
                <a href="https://www.linkedin.com/in/sean-brown-a98a512b3/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}

export default AboutMe;