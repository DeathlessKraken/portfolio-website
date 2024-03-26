import React from 'react';
import styles from './guitarhero.module.css';

export default function GuitarHero() {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <h2>Guitar Hero Light Display</h2>
                <p>
                    A floodlight display built around the videogame Guitar Hero III. 
                    Any PS2 Guitar Hero controller can connect to the display. 
                    The display itself connects to any standard 120v outlet, and to a PC via USB.
                </p>
                <p>badges here</p>
            </div>
            <div className={styles.media}>
                <img src="./images/gh.jpg" alt='Sean holding a Guitar Hero Controller' />
            </div>
        </div>
    );
}