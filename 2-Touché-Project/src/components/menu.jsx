import styles from "../styles/components/menu.module.css";
import { menus } from "../data/menus/index";

export default function Menu() {
  return (
    <section id="menus" className={styles["menu"]}>
      {menus.map((menu,key) => {
        return (
          <div key={key} className="menu">
            <h4 className="menu-title">{menu.title}</h4>
            <ul className="items">
              {menu.items.map((item,key) => {
                return (
                  <li key={key} className="menu-item">
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
