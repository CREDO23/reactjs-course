import styles from "../styles/components/gallery.module.css";
import { categories } from "../data/gallery/categories";
import { dishes } from "../data/gallery/dishes";

export default function Gallery() {
  return (
    <section id="gallery" className={styles["gallery"]}>
      <ul className={styles["categories"]}>
        {categories.map((category) => (
          <li key={category}>
            <button className={`btn ${category == "All" && "btn-primary"}`}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles["dishes"]}>
        {dishes.map((dish,key) => {
          return (
            <li key={key}>
              <div className="dish  framed">
                <div className="dish-title">
                  <p>{dish.name}</p>
                </div>
                <img src={dish.image} alt={dish.name} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
