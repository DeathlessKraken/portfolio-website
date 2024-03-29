import RippleBadge from './RippleBadge';
import styles from './profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.profileText}>
                <div>
                    <h1>Sean Brown</h1> 
                    <h4>Web Designer</h4> 
                    <h4>Software Developer</h4> 
                </div>
                <RippleBadge />
            </div>
            <div className={styles.pfpContainer}>
                <img className={styles.pfp} src="./images/pfp.jpeg" alt="Profile picture of a handsome dude" />
            </div>
        </div>
    );
}