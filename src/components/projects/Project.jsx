import Tag from '../Tag';
import styles from './project.module.css';

export default function Project(props) {
    const { title, descHTML, tags, imgProps, link } = props;

    function generateTags(list) {
        return (
            <>
                { list.map((item, index) => {
                    return (
                        <Tag 
                            key={index} 
                            text={item}
                        />
                    );
                }) }
            </>
        );
    }

    return (
        <a href={link && link} className={styles.layout}>
            <div className={styles.content}>
                <h2>{title}</h2>
                {descHTML}
                <div className={styles.tagContainer}>
                    { generateTags(tags) }
                </div>
            </div>
            <div className={styles.media}>
                <img src={imgProps.src} alt={imgProps.alt} style={{...imgProps.style}} />
            </div>
        </a>
    );
}