import styles from './menudrawer.module.css';

export default function MenuDrawer(props) {
    const { left, onClose } = props;

    function handleClick() {
        onClose();
    }

    return (
        <>
            <div className={styles.drawerOverlay} hidden={left === '-100%' ? true : false}></div>
            <div 
                className={styles.menuDrawer} 
                style={{
                    left: left
                }}
            >
                <div className={styles.closeButton} onClick={handleClick}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className={styles.drawerItems}>
                    <a href="#home" name='home' onClick={handleClick}>Home</a>
                    <a href="#projects" name='projects' onClick={handleClick}>Projects</a>
                    <a href="#experience" name='experience' onClick={handleClick}>Experience</a>
                    <a href="#contact" name='contact' onClick={handleClick}>Contact</a>
                </div>
            </div>
        </>
    );
}