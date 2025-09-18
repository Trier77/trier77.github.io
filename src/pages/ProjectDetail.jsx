// src/components/ProjectDetails.jsx
export default function ProjectDetail({ proj, isActive, onClick }) {
  return (
    <div
      className={`project-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <video
        src={proj.video}   // <-- brug "video" i din JSON
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg shadow-md"
      />

      <div className="overlay">
        <h5>
          {proj.title} ({proj.year})
        </h5>
        <p>{proj.description}</p>
        <ul>
          {proj.tags.map((tag, i) => (
            <li key={i}>{tag}</li> // <ul> -> <li> (semantisk korrekt)
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
