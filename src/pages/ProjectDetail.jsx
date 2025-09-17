// src/components/ProjectDetails.jsx
export default function ProjectDetail({ proj, isActive, onClick }) {
  return (
    <div
      className={`project-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={proj.image} alt={proj.title} />

      <div className="overlay">
        <h3>
          {proj.title} ({proj.year})
        </h3>
        <p>{proj.description}</p>
        <ul>
          {proj.tags.map((tag, i) => (
            <ul key={i}>{tag}</ul>
          ))}
        </ul>
        {proj.links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noreferrer">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
