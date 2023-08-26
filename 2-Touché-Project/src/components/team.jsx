import styles from "../styles/components/team.module.css";
import { chefs } from "../data/team";

export default function Team() {
  return (
    <section className={styles["chefs"]}>
      {chefs.map((chef) => {
        return (
          <div className="chef-card">
            <div className="chef-image">
              <img src={chef.image} alt={chef.name} />
            </div>
            <div className="chef-details">
              <span className="name">{chef.name}</span>
              <p className="description">{chef.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
