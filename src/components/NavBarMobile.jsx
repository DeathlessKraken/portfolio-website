import { useState } from 'react';
import Logo from './Logo';
import MenuDrawer from './MenuDrawer';
import styles from './navbarmobile.module.css';

export default function NavBar () {
    const [left, setLeft] = useState('-100%');

    function handleClick() {
        setLeft('0');
        document.body.style.overflow = 'hidden';
    }

    function handleClose() {
        setLeft('-100%');
        document.body.style.overflow = 'visible';
    }

    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBarBlocker}></div>
            <div className={styles.navBar}>
                <div className={styles.navMenu} onClick={handleClick}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <Logo className={styles.logo} width='3em' height='3em'/>
            </div>
            <MenuDrawer left={left} onClose={handleClose} />
        </div>
    );
}