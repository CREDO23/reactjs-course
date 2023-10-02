import styles from "../../styles/components/question/choice.module.css";

export default function Choice({value}) {

  return (
    <label htmlFor={value && value.substring(3, 10)} className={styles["label"]}>
      <input id={value && value.substring(3, 10)} type="radio" />
      <div></div>
      <p>{value}</p>
    </label>
  );
}
