import styles from "./footer.module.css"

const Footer = () => {
    return (
    <div className={styles.container}>
      <ul>
        <li>Contact Us</li>
        <li>Terms and Conditions</li>
        <li>Privacy and Policy</li>
      </ul>
    </div>
    );
  };
  
  export default Footer;