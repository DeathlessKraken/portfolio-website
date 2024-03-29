import styles from './aboutme.module.css';

function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.aboutContent}>
                <p>
                    Hey there! I&apos;m Sean, a computer scientist and software developer. 
                    I attended <b>Portland State University</b> where I developed a healthy foundation in Computer Science. 
                    I spend my free time in the garage, on my SV650, or in the kitchen!
                </p>
                <p>
                    My journey <i>really</i> started when I was a wee lad, messing around with Windows batch files, 
                    but that&apos;s a story for another day.
                </p>
                <p>
                    I was most recently employed as an Assistant Manager at Discount Tire in Tigard, Oregon.
                    In December 2023, I set out to finish what I started at university: my path to becoming a Full Stack
                    Web Developer. Ever since then, building on my knowledge from <b>PSU</b>, I&apos;ve 
                    been <b>educating myself</b> full-time.
                </p>
                <p>
                    While technology of any kind fascinates me, I&apos;ve been repeatedly drawn to the discipline of 
                    Computer Science. In my formative years, I taught myself to 
                    make <b>chat clients, games, game engines, and mobile applications</b> &#40;I&apos;ve also fantastic
                    stories of handmade radios and a bench power supply&#41;.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;