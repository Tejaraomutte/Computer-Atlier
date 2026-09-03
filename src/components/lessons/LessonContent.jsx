export default function LessonContent({ sections }) {
  return <div className="lesson-content">{sections.map((section, i) => <section key={section.title}><span>0{i + 1}</span><h2>{section.title}</h2><p>{section.text}</p></section>)}</div>;
}
