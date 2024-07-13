import Link from "next/link";
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <span className={styles.image}>
                <a href="/"><img className="home" src="./illumino.png" alt="logo illumino"></img></a>
            </span>
            <div className={styles.navbar}>
                <Links/>
            </div>
        </div>
        );
  };
  
  export default Navbar;