export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-badge">
        <div className="dot" />
        JLS Trading Co
      </div>
      <h1 className="hero-h1">
        We <span style={{ color: '#ec4899' }}>Vibing</span>
        <span className="hero-period">.</span>
      </h1>
      <p className="hero-sub">
        This is a look at the tools I use, the systems I've built, and what's
        actually changed. Work, personal life, the whole thing.
      </p>
      <div className="hero-stats">
        <div>
          <div className="hstat-num">
            10<em>+</em>
          </div>
          <div className="hstat-label">Tools mastered</div>
        </div>
        <div>
          <div className="hstat-num">
            4<em>&times;</em>
          </div>
          <div className="hstat-label">Faster output</div>
        </div>
        <div>
          <div className="hstat-num">3</div>
          <div className="hstat-label">Weeks to build this</div>
        </div>
      </div>
    </section>
  );
}
