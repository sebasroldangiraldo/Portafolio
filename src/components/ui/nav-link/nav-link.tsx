"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../../navbar/navbar.module.scss";

export interface NavLinkProps {
    path : string;
    title : string;
    className : string;
};

const NavLink : React.FC<NavLinkProps> = ({ path, title, className }) => {

    const currentPath = usePathname();

    return ( 
        <Link href={path} className={`${className} ${currentPath === path && style.active}`}>{title}</Link>
    );
};

export default NavLink;