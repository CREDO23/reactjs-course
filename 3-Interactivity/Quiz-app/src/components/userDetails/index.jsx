import styles from "../../styles/components/userDetails.module.css";

export default function UserDetails({ fullName, email }) {
  return (
    <div className={styles["user_details"]}>
      <div>
        <span>Full name :</span> <b>{fullName}</b>
      </div>
      <div>
        <span>Email :</span> <b>{email}</b>
      </div>
    </div>
  );
}
