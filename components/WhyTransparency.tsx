const points = [
  {
    stat: "Since 2021",
    text: "U.S. hospitals have been required by federal rule to publish standard charges, including cash prices and negotiated rates with insurers.",
  },
  {
    stat: "Several ×",
    text: "The same scan or test can cost several times more at one facility than another just a few miles away.",
  },
  {
    stat: "Unreadable",
    text: "The published files are huge, technical, and inconsistent — practically unusable for patients without help.",
  },
];

export default function WhyTransparency() {
  return (
    <section className="section section-dark" id="why">
      <div className="container why">
        <div className="why-copy">
          <span className="eyebrow">Why it matters</span>
          <h2>The prices are public. Finding them shouldn&apos;t be a full-time job.</h2>
          <p>
            Price transparency rules put the data out there, but most people never see it. HospitalBuddy does the
            heavy lifting — collecting, cleaning, and translating price files into an estimate you can act on
            before you book.
          </p>
        </div>
        <div className="why-points">
          {points.map((p) => (
            <div key={p.stat} className="why-point">
              <strong>{p.stat}</strong>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
