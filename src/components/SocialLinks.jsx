import styles from './sociallinks.module.css';

export default function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            <a href="https://github.com/SBSoftwareDev">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://stackoverflow.com/users/3557315/">
                <i className="fa-brands fa-stack-overflow"></i>
            </a>
            <a href="https://www.linkedin.com/in/sean-brown-a98a512b3/">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    );
}