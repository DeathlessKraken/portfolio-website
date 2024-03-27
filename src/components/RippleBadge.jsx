import React from 'react';
import styles from './ripplebadge.module.css';

export default function RippleBadge() {
    return (
        <div className={styles.rippleBadge}>
            <div className={styles.rippleBadgeBorder}>
                <p>Looking for work...</p>
                <div className={styles.ripple}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    );
}
