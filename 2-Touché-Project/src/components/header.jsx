import { menus } from "../data/header/menus";
import styles from "../styles/components/header.module.css";
export default function Header() {
  return (
    <header className={styles["header"]}>
      <a className={styles.logo} href="#">
        <span>Touché</span>
      </a>

      <ul className={styles["navigation"]}>
        {menus.map((menu) => {
          return (
            <li className={styles["navigation-item"]}>
              <a key={menu.title} href={menu.link}>
                {menu.title}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
