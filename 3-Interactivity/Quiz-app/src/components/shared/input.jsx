export default function Input({ label, error, placeholder, onChange, value }) {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        id={label}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
