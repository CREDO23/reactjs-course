import styles from "../../styles/components/question/index.module.css";
import Button from "../shared/button";
import Choice from "./choice";

export default function Question() {
  return (
    <div className={styles["question"]}>
      <p>Pourquoi on met le script en bas dans la balyse body?</p>

      <div className={styles["choices"]}>
        <Choice value={"React"} />
        <Choice value={"Node"} />
        <Choice value={"Angular"} />
        <Choice value={"Rust"} />
      </div>

      <div className={styles["action_buttons"]}>
        <Button type="secondary">Leave</Button>
        <Button disabled >Next</Button>
      </div>
    </div>
  );
}
