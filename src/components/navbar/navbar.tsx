import styles from "./navbar.module.scss";
import NavLink from "../ui/nav-link/nav-link";

const links = [
    { path: "/about", title: "About Me" },
    { path: "/projects", title: "Projects" },
    { path: "/contact", title: "Contact Me" }
];


const Navbar : React.FC = () => {

    return (
        <header className={styles.header}>
  
            <nav className={styles.navbar}>
            {links.map((item, key) => (
                <NavLink path={item.path} title={item.title} key={key} className={styles.link} />
            ))}
            </nav>

        </header>
    );
};

export default Navbar;