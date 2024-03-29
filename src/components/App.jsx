import AboutMe from "./AboutMe";
import ExperienceContent from './ExperienceContent';
import Footer from "./Footer";
import Profile from "./Profile";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import useMediaQuery from './functions/useMediaQuery';
import styles from "./app.module.css";

export default function App(){
    const isMobile = useMediaQuery('(max-width: 840px)');

    return (
        <div className={styles.appContainer}>
            <div className={styles.app} id="home"> 
                {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
                <Profile />
                <AboutMe />
                <ExperienceContent />
            </div>
            <Footer />
        </div>
    );
}