import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";

const Links = () => {

    const links = [
        {
            title: "Dashboard",
            path: "/",
            image: "./dashboard icon.png",
        },
        {
            title: "Music",
            path: "/music",
            image: "./song icon.png",
        },
        {
            title: "Story",
            path: "/story",
            image: "./story icon.png",
        },
        {
            title: "Users",
            path: "/user",
            image: "./users.png",
        },
    ];

    return (
        <div className={styles.container}>
            {links.map((link=>(
                <NavLink item={link} key={link.title} />
            )))}
        </div>
        );
  };
  
  export default Links;