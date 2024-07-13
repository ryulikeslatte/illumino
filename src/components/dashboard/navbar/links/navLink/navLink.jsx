"use client"
import styles from "./navLink.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {

    const pathName = usePathname();

    return (
        <div className={styles.container}>
            <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
                <div className={styles.page}>
                    <img src={item.image} alt={`${item.title} icon`} className={styles.icon} />
                    <span className={styles.title}>{item.title}</span>
                </div>
            </Link>
        </div>
    );
  };
  
  export default NavLink;