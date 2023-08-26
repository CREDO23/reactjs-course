import { menus } from "../../data/header/menus";
import styles from "../../styles/components/header.module.css";

import Hamburger from "./hamurger";
export default function Header() {
  return (
    <header className={styles["header"]}>
      <a className={styles.logo} href="#intro">
        <span>Touché</span>
      </a>

      <ul className={styles["navigation"]}>
        {menus.map((menu) => {
          return (
            <li key={menu.title} className={styles["navigation-item"]}>
              <a key={menu.title} href={menu.link}>
                {menu.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Hamburger />
    </header>
  );
}
