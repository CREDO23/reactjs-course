import styles from "../../styles/components/question/choice.module.css";

export default function Choice({ value, onCheck, checked }) {
  const handleCheck = (e) => {
    if (e.target.checked) {
      onCheck();
    }
  };

  return (
    <label
      htmlFor={value}
      className={styles["label_option"]}
    >
      <input
        checked={checked}
        onChange={handleCheck}
        id={value}
        type="radio"
      />
      <div></div>
      <p>{value}</p>
    </label>
  );
}
