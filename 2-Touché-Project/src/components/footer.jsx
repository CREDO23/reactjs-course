import styles from "../styles/components/footer.module.css";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["information"]}>
        <div className={styles["adresses"]}>
          <h4>Adresses</h4>
          <p>4321 California St,</p>
          <p>San Francisco, CA 12345</p>
        </div>
        <div className={styles["openning-hours"]}>
          <h4>Opening hours</h4>
          <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
          <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
        </div>
        <div className={styles["contact"]}>
          <h4>Contact info</h4>
          <p>Phone: +1 123 456 1234</p>
          <p>Email: info@company.com</p>
        </div>
      </div>
      <div className={styles["social-medias"]}>
        <ul>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
        <p>© 2023 Touché. All rights reserved.</p>
      </div>
    </div>
  );
}
