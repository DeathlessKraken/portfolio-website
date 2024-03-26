import React from 'react';
import styles from './tag.module.css';

export default function Tag(props) {
    return (
        <div className={styles.tag}>
            <p>{props.text}</p>
        </div>
    );
}    
