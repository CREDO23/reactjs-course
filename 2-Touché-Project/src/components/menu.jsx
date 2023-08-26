import styles from "../styles/components/menu.module.css";
import { menus } from "../data/menus/index";

export default function Menu() {
  return (
    <section className={styles["menu"]}>
      {menus.map((menu) => {
        return (
          <div key={menu.title} className="menu">
            <h4 className="menu-title">{menu.title}</h4>
            <ul className="items">
              {menu.items.map((item) => {
                return (
                  <li key={item.name} className="menu-item">
                    <div className="item-info">
                      <span className="title">{item.name}</span>
                      <span className="price">${item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
