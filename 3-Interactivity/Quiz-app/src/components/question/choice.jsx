import styles from "../../styles/components/question/choice.module.css";

export default function Choice({ value, onCheck, checked }) {
  const handleCheck = (e) => {
    if (e.target.checked) {
      onCheck();
    }
  };

  return (
    <label
      htmlFor={value && value.substring(3, 10)}
      className={styles["label"]}
    >
      <input
        checked={checked}
        onChange={handleCheck}
        id={value && value.substring(3, 10)}
        type="radio"
      />
      <div></div>
      <p>{value}</p>
    </label>
  );
}
