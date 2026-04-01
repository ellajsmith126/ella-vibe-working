export function Demo() {
  return (
    <section className="section" id="demo" style={{ borderBottom: 'none' }}>
      <div className="eyebrow">Live Demo</div>
      <h2 className="sec-title">See it in action</h2>
      <p className="sec-sub">
        An interactive tool built entirely with AI — try it yourself
      </p>
      <div className="demo-card">
        <div className="demo-title">2-Sec Fix</div>
        <p className="demo-sub">
          A tool built entirely with AI — try it yourself.
        </p>
        <a
          href="https://2-sec-fix.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="demo-btn"
        >
          Try it →
        </a>
      </div>
    </section>
  );
}
