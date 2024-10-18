import styles from "./footer.module.scss";

const Footer : React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <p className={styles.text}>2024 | Sebastián Roldán Giraldo Portfolio</p>
            </div>
        </div>
    );
};

export default Footer;