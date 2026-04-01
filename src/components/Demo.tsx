export function Demo() {
  return (
    <section className="section" id="demo" style={{ borderBottom: 'none' }}>
      <div className="eyebrow">Live Demo</div>
      <h2 className="sec-title">See It In Action</h2>
      <p className="sec-sub">
        Example of an interactive tool I built with AI
      </p>
      <div className="demo-card">
        <div className="demo-title">2-Sec Fix</div>
        <p className="demo-sub">
          Example of an interactive tool I built with AI.
        </p>
        <a
          href="https://2-sec-fix.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="demo-btn"
        >
          Try It →
        </a>
      </div>
    </section>
  );
}
