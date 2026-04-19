export default function Tag({ children, color = "blue" }) {
  return <span className={`tag tag--${color}`}>{children}</span>;
}
