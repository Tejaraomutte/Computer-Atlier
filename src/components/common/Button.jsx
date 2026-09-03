export default function Button({ children, variant = "default", ...props }) {
  return <button className={`ui-button ${variant}`} {...props}>{children}</button>;
}
