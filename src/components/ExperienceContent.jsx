import Project from "./projects/Project";
import Work from "./Work";
import LeaveNote from './LeaveNote';
import styles from './experiencecontent.module.css';

export default function ExperienceContent() {

    const THG_DESC = 
    <p>
        A fictional tavern hosting a collection of food items inspired 
        by the medieval and fantasy genre, such as pigeon pie and lemon cakes from <span>Game 
        of Thrones</span>, Lembas from <span>Lord of the Rings</span>, and Butter Beer from 
        <span> Harry Potter</span>.
    </p>;

    const GH_DESC = 
    <p>
        A floodlight display built around the videogame Guitar Hero III. 
        Any PS2 Guitar Hero controller can connect to the display. 
        The display itself connects to any standard 120v outlet, and to a PC via USB.
    </p>

    return (
        <div className={styles.expContent}>
            <div className={styles.projects} id="projects">
                <h2>My Work</h2>
                <div>
                    <Project 
                        title="Fantasy Foods - 🚧"
                        descHTML={THG_DESC}
                        tags={['React', 'PostgreSQL', 'Node.js', 'Express']}
                        imgProps={{
                            src: './images/THG_logo.svg',
                            alt: "Logo of Sean's fictional tavern, Fantasy Foods",
                            style: {padding: '8px', overflow: 'visible', backgroundColor: '#e5ab95'}
                        }}
                    />
                    <Project 
                        title="Guitar Hero Light Display"
                        descHTML={GH_DESC}
                        tags={['C++', 'C#', 'Arduino', 'High Voltage']}
                        imgProps={{
                            src: './images/gh.jpg',
                            alt: "Sean holding a Guitar Hero Controller",
                        }}
                        link="https://github.com/SBSoftwareDev/guitar-hero-project"
                    />
                </div>
            </div>
            <Work />
            <LeaveNote />
        </div>
    );
}