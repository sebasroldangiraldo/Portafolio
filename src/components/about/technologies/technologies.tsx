import { MdVerified } from "react-icons/md";
import styles from "./technologies.module.scss"

const Technologies : React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/userprofile.jpg" alt="Sebastián Roldán Giraldo" className={styles.image} />
            </div>
            <div className={styles.userPost}>
                <div>
                    <div className={styles.user}>
                        <p className={styles.username}>sebasroldangiraldo</p>
                        <MdVerified className={styles.verified} />
                    </div>
                    <p className={styles.location}>Medellín, Colombia</p>
                </div>

                <div>
                    <h3 className={styles.title}>Technologies</h3>
                    <p className={styles.text}>These are the technologies that I am learning and developing, which are part of my daily training process!</p>
                </div>

                <div className={styles.information}>
                    <div className={styles.card}>
                        <img src="/HTML.png" alt="HTML" className={styles.cardImage}/>
                        <h4 className={styles.cardTitle}>HTML</h4>
                    </div>
                    <div className={styles.card}>
                        <img src="/CSS.png" alt="CSS" className={styles.cardImage}/>
                        <h4 className={styles.cardTitle}>CSS</h4>
                    </div>
                    <div className={styles.card}>
                        <img src="/JAVASCRIPT.png" alt="JavaScript" className={styles.cardImage}/>
                        <h4 className={styles.cardTitle}>JavaScript</h4>
                    </div>
                    <div className={styles.card}>
                        <img src="/TYPESCRIPT.png" alt="TypeScript" className={styles.cardImage}/>
                        <h4 className={styles.cardTitle}>TypeScript</h4>
                    </div>
                    <div className={styles.card}>
                        <img src="/React.png" alt="React" className={styles.cardImage}/>
                        <h4 className={styles.cardTitle}>React</h4>
                    </div>
                    <div className={styles.card}>
                        <img src="/sass.png" alt="Sass" className={styles.cardImage}/>
                        <h4 className={styles.cardTitle}>Sass</h4>
                    </div>
                </div>
                <div className={styles.labels}>
                    <p className={`${styles.label} ${styles.software}`}>Software</p>
                    <p className={`${styles.label} ${styles.technologies}`}>Technologies</p>
                    <p className={`${styles.label} ${styles.learning}`}>Learning</p>
                </div>
            </div>
        </div>
    );
};

export default Technologies;