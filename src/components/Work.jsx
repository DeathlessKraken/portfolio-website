import styles from './work.module.css';

export default function Work() {
    return (
        <div className={styles.work}>
            <h1>Professional Experience</h1>
            <hr />
            <div className={styles.careerContainer}>
                <div className={styles.career}>
                    <h3 className={styles.gridJob}>Discount Tire</h3>
                    <h3 className={styles.gridLocation}>Tigard, Oregon</h3>
                    <h3 className={styles.gridPosition}>Assistant Manager</h3>
                    <h3 className={styles.gridTime}>2022-2024</h3>
                    <ul className={styles.gridDesc}>
                        <li>
                            Personally <span>managed key store operations</span> such as 
                            outbound product, store inventory, machine maintenance,
                            and Technician training.
                        </li>
                        <li>
                            Consistently <span>top-ranked in unit sales</span> value. I develop personal
                            relationships with customers, identify their needs, and communicate what 
                            may work best for them. 
                        </li>
                        <li>
                            Provided mentorship to new employees, <span>communicating clear and 
                            concise directions</span> for optimal safety.
                        </li>
                        <li>
                            Maintained <span>accountablity with daily audits</span> that provide insight and seed 
                            growth for future oppotunities
                        </li>
                    </ul>
                </div>
                <div className={styles.career}>
                    <h3 className={styles.gridJob}>Evans Metal Fabricators</h3>
                    <h3 className={styles.gridLocation}>Swan Island, Oregon</h3>
                    <h3 className={styles.gridPosition}>Welder</h3>
                    <h3 className={styles.gridTime}>2021-2022</h3>
                    <ul className={styles.gridDesc}>
                        <li>
                            Manufactured machine bases for vibration sensitive production tools with <span>teams
                            of 2-3</span> people. 
                        </li>
                        <li>
                            <span>Carefully observed blueprints</span> while leveling, welding, and grinding Hollow Structural
                            Steel with high scrutiny.
                        </li>
                        <li>
                            Operated forklifts and 10 ton overhead cranes with the <span>safety of others</span> in mind.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}