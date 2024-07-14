import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";

const Links = () => {

    const links = [
        {
            title: "Dashboard",
            path: "/dashboard",
            image: "/dashboard icon.png",
        },
        {
            title: "Music",
            path: "/dashboard/music",
            image: "/song icon.png",
        },
        {
            title: "Story",
            path: "/dashboard/story",
            image: "/story icon.png",
        },
        {
            title: "Users",
            path: "/dashboard/user",
            image: "/users.png",
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