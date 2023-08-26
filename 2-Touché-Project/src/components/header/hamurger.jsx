import styles from "../../styles/components/header.module.css";

export default function Hamburger() {
  return (
    <div className={styles["hamburger"]}>
      <div className={styles["hamburger-line"]}></div>
      <div className={styles["hamburger-line"]}></div>
      <div className={styles["hamburger-line"]}></div>
    </div>
  );
}
