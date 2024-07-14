"use client";
import { usePathname } from "next/navigation";
import styles from "./topbar.module.css";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;