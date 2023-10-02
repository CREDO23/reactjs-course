export default function Input({ name, error, placeholder, onChange, value }) {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        id={name}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
