import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import styles from "./layout.module.scss";
import ProfileCard from "@/components/about/profile-card/profile-card";

interface LayoutProps {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Navbar></Navbar>
            <ProfileCard />
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;