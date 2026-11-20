const faqs = [
  {
    q: "Where do the prices come from?",
    a: "Primarily from the machine-readable price files hospitals must publish under federal price transparency rules, supplemented by insurer transparency data and bills shared by our community.",
  },
  {
    q: "How are recommendations personalized?",
    a: "You tell us your plan details (or choose self-pay), your location, and your priorities. We estimate your out-of-pocket cost at each facility and rank options by the balance of cost, distance, and quality you choose.",
  },
  {
    q: "Is HospitalBuddy free?",
    a: "Yes — searching and comparing prices is free for patients. We do not let providers pay to rank higher.",
  },
  {
    q: "Are the estimates guaranteed?",
    a: "No. Estimates are a guide, not a quote. Final bills depend on your exact care, your plan, and the provider. Always confirm with the facility and your insurer before scheduling.",
  },
  {
    q: "Should I use this in an emergency?",
    a: "No. In an emergency, call 911 or go to the nearest emergency room. HospitalBuddy is for planning non-urgent, shoppable care.",
  },
  {
    q: "When can I use the full app?",
    a: "We are building it now. Join the waitlist and we will let you know as soon as early access opens in your area.",
  },
];

export default function Faq() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container narrow">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q} className="card">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
