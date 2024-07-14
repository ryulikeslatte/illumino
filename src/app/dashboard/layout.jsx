import Footer from "@/ui/dashboard/footer/Footer";
import Navbar from "@/ui/dashboard/navbar/Navbar";
import TopBar from "@/ui/dashboard/topbar/topbar";
import styles from '@/ui/dashboard/dashboard.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}><Navbar /></div>
            <div className={styles.content}>
            <TopBar />
            {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;