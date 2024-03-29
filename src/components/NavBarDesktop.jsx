import Logo from './Logo';
import styles from './navbardesktop.module.css';

export default function NavBar () {
    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBarBlocker}></div>
            <div className={styles.navBar}>
                <Logo className={styles.logo} width='3em' height='3em'/>
                <div className={styles.navBarLinks}>
                    <a href='#home'>
                        <p>Home</p>
                    </a>
                    <a href='#projects'>
                        <p>Projects</p>
                    </a>
                    <a href='#experience'>
                        <p>Experience</p>
                    </a>
                    <a href='#contact'>
                        <p>Contact Me</p>
                    </a>
                </div>
            </div>
        </div>
    );
}