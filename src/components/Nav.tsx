interface NavProps {
  activeSection: string;
}

const links = [
  { href: '#stack', label: 'Stack' },
  { href: '#systems', label: 'Systems' },
  { href: '#impact', label: 'Impact' },
  { href: '#life', label: 'Life' },
  { href: '#demo', label: 'Demo' },
];

export function Nav({ activeSection }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-name">Ella — Vibe Working</div>
      <div className="nav-links">
        {links.map(({ href, label }) => (
          <a
            key={href}
            className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
            href={href}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
