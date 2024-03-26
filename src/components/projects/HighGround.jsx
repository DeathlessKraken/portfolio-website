import React from 'react';
import styles from './highground.module.css';

export default function HighGround() {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <h2>Tavern Recipes</h2>
                <p>
                    The High Ground, a fictional tavern hosting a collection of food items inspired 
                    by the medieval and fantasy genre, such as pigeon pie and lemon cakes from <span>Game 
                    of Thrones</span>, Lembas from <span>Lord of the Rings</span>, and Butter Beer from 
                    <span> Harry Potter</span>.
                </p>
                <p>badges here</p>
            </div>
            <div className={styles.media}>
                <img src="./images/THG_logo.png" alt="Logo of Sean's fictional tavern, The High Ground" />
            </div>
        </div>
    );
}