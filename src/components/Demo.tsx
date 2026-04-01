export function Demo() {
  return (
    <section className="section" id="demo" style={{ borderBottom: 'none' }}>
      <div className="eyebrow">Live Demo</div>
      <h2 className="sec-title">See it in action</h2>
      <p className="sec-sub">
        An interactive tool built entirely with AI — try it yourself
      </p>
      <div className="demo-card">
        <div className="demo-title">Vibe Working Portfolio Judge</div>
        <p className="demo-sub">
          Paste any AI portfolio and get a full scored evaluation across 10
          dimensions.
          <br />
          Built with Claude Code in one session. This is what building with AI
          actually looks like.
        </p>
        <div className="demo-placeholder">… Embed your demo here</div>
        <a href="#" className="demo-btn">
          Try the judge →
        </a>
      </div>
    </section>
  );
}
