import Logo from './Logo';
import styles from './navbarmobile.module.css';

export default function NavBar () {
    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBarBlocker}></div>
            <div className={styles.navBar}>
                <div className={styles.navMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <Logo className={styles.logo} width='3em' height='3em'/>
            </div>
        </div>
    );
}