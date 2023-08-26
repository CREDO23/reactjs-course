import Header from "./header";
import styles from "../styles/components/hero.module.css";

export default function Hero() {
  return (
    <section className={styles["hero"]}>
      <Header />
      <div className={styles["intro"]}>
        <div className={styles["tag-line-container"]}>
          <span className={styles["brand"]}>Touché</span>
          <span className={styles["tag-line"]}>Restaurant / Coffee / Pub</span>
        </div>
        <button className="btn btn-primary">Discover Story</button>
      </div>
    </section>
  );
}
