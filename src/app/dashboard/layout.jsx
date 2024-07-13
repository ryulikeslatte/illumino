import Footer from "@/ui/dashboard/footer/Footer";
import Navbar from "@/ui/dashboard/navbar/Navbar";
import styles from '@/ui/dashboard/dashboard.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
            {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;