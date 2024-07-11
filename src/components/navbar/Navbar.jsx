import Links from "./links/Links"
import Link
 from "next/link";
const Navbar = () => {
    return (
        <div className="image-text">
            <span className="image">
                <img className="home" src="./illumino.png" alt="logo illumino"></img>
            </span>
            <div className="navbar">
                <Links/>
            </div>
        </div>
        );
  };
  
  export default Navbar;