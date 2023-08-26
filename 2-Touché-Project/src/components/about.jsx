import styles from "../styles/components/about.module.css";
import about from "../assets/images/about.jpg";

export default function About() {
  return (
    <section id="about" className={styles["about"]}>
      <div className={styles["about-img"]}>
        <img src={about} alt="about-us" />
      </div>
      <div className={styles["about-text-container"]}>
        <div className={styles["our-restaurant"]}>
          <h3>Our Restaurant</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
            bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam
            commodo nibh.
          </p>
        </div>

        <div className={styles["arwarded-chef-container"]}>
          <h3>Arwarded Chefs</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
            bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.
          </p>
        </div>
      </div>
    </section>
  );
}
