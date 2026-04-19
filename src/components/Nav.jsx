const NAV_LINKS = [
  { id: "about",      label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects",   label: "projects" },
  { id: "skills",     label: "skills" },
  { id: "contact",    label: "contact" },
];

export default function Nav({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <span className="nav-logo">OK // portfolio</span>
      <ul className="nav-links">
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id}>
            <button
              className={`nav-link ${active === id ? "nav-link--active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
