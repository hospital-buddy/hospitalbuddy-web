export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Healthcare price transparency, made personal</span>
          <h1>
            Know the price <span className="hl">before you go.</span>
          </h1>
          <p className="lead">
            HospitalBuddy compares what hospitals, imaging centers, and clinics near you charge for the same
            care — then recommends the best option for <em>your</em> insurance, budget, and needs. Think
            GasBuddy, but for your health.
          </p>
          <div className="hero-cta">
            <a href="#waitlist" className="btn btn-primary">
              Get early access
            </a>
            <a href="#demo" className="btn btn-ghost">
              See how it works →
            </a>
          </div>
          <ul className="hero-points">
            <li>Free for patients</li>
            <li>Built on public price data</li>
            <li>No ads from providers</li>
          </ul>
        </div>

        <div className="hero-card" aria-label="Example price comparison">
          <div className="hc-head">
            <div>
              <div className="hc-label">MRI of the knee · near 02139</div>
              <div className="hc-sub">Your plan: PPO, $500 deductible left</div>
            </div>
            <span className="pill">Example</span>
          </div>
          <ul className="hc-list">
            <li className="best">
              <div>
                <strong>Riverside Imaging Center</strong>
                <span>3.2 mi · ★ 4.7</span>
              </div>
              <div className="price">
                $450<small>cash price</small>
              </div>
              <span className="badge">Best match</span>
            </li>
            <li>
              <div>
                <strong>Lakeview Medical Center</strong>
                <span>6.8 mi · ★ 4.5</span>
              </div>
              <div className="price">
                $670<small>you pay</small>
              </div>
            </li>
            <li>
              <div>
                <strong>St. Elm Regional Hospital</strong>
                <span>1.4 mi · ★ 4.1</span>
              </div>
              <div className="price">
                $796<small>you pay</small>
              </div>
            </li>
          </ul>
          <div className="hc-foot">
            Same scan, <strong>$346</strong> difference in what you pay — and at Riverside, paying cash beats
            your insurance estimate.
          </div>
        </div>
      </div>
    </section>
  );
}
