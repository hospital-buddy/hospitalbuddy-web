const steps = [
  {
    n: "1",
    title: "Tell us what you need",
    text: 'Search a procedure, test, or visit in plain language — "knee MRI", "colonoscopy", "blood work" — and your ZIP code.',
  },
  {
    n: "2",
    title: "Add your coverage",
    text: "Share your insurance plan, deductible, and what matters most: lowest cost, shortest drive, or highest quality.",
  },
  {
    n: "3",
    title: "Get your best match",
    text: "We rank nearby options by what you will actually pay — and flag when paying cash beats using insurance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Shopping for care should be as easy as finding cheap gas</h2>
          <p>Hospitals are now required to publish their prices. We turn those massive files into a simple answer.</p>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="card step">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
