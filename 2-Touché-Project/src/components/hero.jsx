import styles from "../styles/components/hero.module.css";

export default function Hero() {
  return (
    <div id="intro" className={styles["hero"]}>
      <div className={styles["intro"]}>
        <div className={styles["tag-line-container"]}>
          <span className={styles["brand"]}>Touché</span>
          <span className={styles["tag-line"]}>Restaurant / Coffee / Pub</span>
        </div>
        <a href="#about">
          <button className="btn btn-primary">Discover Story</button>
        </a>
      </div>
    </div>
  );
}
