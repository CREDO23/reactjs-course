export default function Button({
  children,
  htmlType = "submit",
  onClick,
  type = "primary",
  disabled = false,
  background,
  color
}) {
  return (
    <button
      style={{ background, color }}
      className={`btn ${
        type == "primary"
          ? "btn-primary"
          : type == "secondary"
          ? "btn-secondary"
          : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </button>
  );
}
