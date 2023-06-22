import styles from "./footer.module.css";
import Image from "next/image";
import logo from "~images/logo.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div>Production Order Tracker by Jason Martens</div>
      <Image src={logo} width={20} height={20} alt="Kliptico" />
    </div>
  );
}
export default Footer;
