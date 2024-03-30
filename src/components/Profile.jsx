import RippleBadge from './RippleBadge';
import SocialLinks from './SocialLinks';
import useMediaQuery from './functions/useMediaQuery';
import styles from './profile.module.css';

export default function Profile() {
    const isMobile = useMediaQuery('(max-width: 600px)');

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
            {!isMobile && <SocialLinks />}
            <div className={styles.pfpContainer}>
                <img className={styles.pfp} src="./images/pfp.jpeg" alt="Profile picture of a handsome dude" />
            </div>
            {isMobile && <SocialLinks />}
        </div>
    );
}