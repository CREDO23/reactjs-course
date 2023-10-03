import styles from "../../styles/components/result.module.css";
import Button from "../shared/button";
import UserDetails from "../userDetails";

export default function Result({ userInfo, score, message }) {
  return (
    <div className={styles["result"]}>
      <h3>Result</h3>

      <div className={styles["result_info"]}>
        <div className={styles["user_details"]}>
          <p>User details:</p>
          <UserDetails {...userInfo} />
        </div>
        <div className={styles["score"]}>
          <p>Score:</p>
          <div className={styles[score > 7 ? "success" : "failure"]}>
            <h2>{score}/15</h2>
          </div>
          <p className={styles["message"]}>
            <b>{score > 7 ? "Great Job!" : "You can do better!"}</b>
          </p>
        </div>
      </div>

      <div className={styles["action_buttons"]}>
        <Button>Home</Button>
      </div>
    </div>
  );
}
