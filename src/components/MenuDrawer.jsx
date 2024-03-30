import styles from './menudrawer.module.css';

export default function MenuDrawer(props) {
    const { left, onClose } = props;

    return (
        <>
            <div className={styles.drawerOverlay} hidden={left === '-100%' ? true : false}></div>
            <div className={styles.menuDrawer} style={{left: left}}>
                <div className={styles.closeButton} onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className={styles.drawerItems}>

                </div>
            </div>
        </>
    );
}