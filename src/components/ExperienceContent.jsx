import React from "react";
import styles from './experiencecontent.module.css';
import GuitarHero from "./projects/GuitarHero";
import HighGround from "./projects/HighGround";

export default function ExperienceContent() {

    return (
        <div className={styles.expContent}>
            <h2>My Work</h2>
            <HighGround />
            <GuitarHero />
        </div>
    );
}