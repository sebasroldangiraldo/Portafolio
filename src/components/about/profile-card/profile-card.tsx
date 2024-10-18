import Anchor from "@/components/ui/anchor/anchor";
import { MdVerified } from "react-icons/md";
import styles from "./profile-card.module.scss";

const ProfileCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <p className={styles.username}>sebasroldangiraldo</p>
                <MdVerified className={styles.verified} />
            </div>
            <div className={styles.userHeader}>
                <div className={styles.imageContainer}>
                    <img src="/userprofile.jpg" alt="Sebastián Roldán Giraldo" className={styles.image} />
                </div>
                <div className={styles.metricsContainer}>
                    <div>
                        <p className={styles.data}>8 Months</p>
                        <p className={styles.metric}>Experience</p>
                    </div>
                    <div>
                        <p className={styles.data}>Junior Developer</p>
                        <p className={styles.metric}>Role</p>
                    </div>
                    <div>
                        <p className={styles.data}>2+</p>
                        <p className={styles.metric}>Projects</p>
                    </div>
                </div>
            </div>
            <div className={styles.userDescription}>
                <h4 className={styles.title}>Sebastián Roldán Giraldo</h4>
                <p className={styles.description}>🎨 | Front-End Software Development Student.</p>
                <p className={styles.description}> 🖥️ | I love creating innovative solutions by combining programming with creativity and design.</p>
                <p className={styles.description}>📍 | Medellín - Colombia.</p>
            </div>
            <div className={styles.userLinks} >
                <Anchor href="https://github.com/sebasroldangiraldo" className={styles.anchor}>GitHub</Anchor>
                <Anchor href="https://www.linkedin.com/in/sebasti%C3%A1n-rold%C3%A1n-giraldo-aba41b323" className={styles.anchor}>LinkedIn</Anchor>
                <Anchor href="https://www.linkedin.com/in/sebasti%C3%A1n-rold%C3%A1n-giraldo-aba41b323" className={styles.anchor}>CV</Anchor>
            </div>
        </div>
    );
};

export default ProfileCard;