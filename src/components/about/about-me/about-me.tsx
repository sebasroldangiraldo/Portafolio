import { MdVerified } from "react-icons/md";
import styles from "./about-me.module.scss";

const AboutMeCard: React.FC = () => {
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

                <div className={styles.information}>
                    <h3 className={styles.title}>Get To Know Me!</h3>
                    <p className={styles.text}>I am a front-end software development student in constant training, passionate about creativity, design and technology.
                        Every day I have the opportunity to share with professionals who bring me valuable knowledge to strengthen my skills, thus improving my technical knowledge in development, emotional management in my interpersonal and professional relationships and the integration of English as a second language in my field of work.</p>
                </div>
                <div className={styles.labels}>
                    <p className={`${styles.label} ${styles.creativity}`}>Creativity</p>
                    <p className={`${styles.label} ${styles.programming}`}>Programming</p>
                    <p className={`${styles.label} ${styles.english}`}>English B2</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeCard;