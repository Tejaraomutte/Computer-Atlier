export default function EmptyState({ title = "Nothing here yet", text = "Start exploring to add content." }) {
  return <div className="empty-state"><h3>{title}</h3><p>{text}</p></div>;
}
