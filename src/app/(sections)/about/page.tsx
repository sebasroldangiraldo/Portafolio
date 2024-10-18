import ProfileCard from "@/components/about/profile-card/profile-card";
import AboutMeCard from "@/components/about/about-me/about-me";
import Technologies from "@/components/about/technologies/technologies";
import styles from "./about.module.scss"

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <AboutMeCard />
            <Technologies />
        </div>
    );
}