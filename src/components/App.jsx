import AboutMe from "./AboutMe";
import ExperienceContent from './ExperienceContent';
import Footer from "./Footer";
import Profile from "./Profile";
import styles from "./app.module.css";

export default function App(){
    return (
        <div className={styles.appContainer}>
            <div className={styles.app}> 
                <Profile />
                <AboutMe />
                <ExperienceContent />
            </div>
            <Footer />
        </div>
    );
}