import Footer from "@/components/dashboard/footer/Footer";
import Navbar from "@/components/dashboard/navbar/Navbar";
import './dashboard.css'

const Layout = ({children}) => {
    return (
        <div className='container'>
            <Navbar />
            <div className='main-content'>
            {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;