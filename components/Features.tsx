import Icon, { type IconName } from "./Icon";

const features: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "dollar",
    title: "Real prices, side by side",
    text: "Cash prices and insurer-negotiated rates from hospital price files, normalized so you can compare apples to apples.",
  },
  {
    icon: "target",
    title: "Personalized to your plan",
    text: "Estimates factor in your deductible, coinsurance, and network so you see your share — not a sticker price.",
  },
  {
    icon: "map",
    title: "Map & distance",
    text: "Find the best value within a drive you are comfortable with, just like finding the cheapest gas on your route.",
  },
  {
    icon: "star",
    title: "Quality alongside cost",
    text: "Public quality measures and patient ratings help you avoid trading safety for savings.",
  },
  {
    icon: "users",
    title: "Community-reported bills",
    text: "Patients share what they were actually billed, keeping estimates honest and up to date.",
  },
  {
    icon: "bell",
    title: "Price alerts",
    text: "Planning a procedure? Get notified when a lower-cost, in-network option appears near you.",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything you need to make a confident choice</h2>
        </div>
        <div className="grid-3">
          {features.map((f) => (
            <article key={f.title} className="card feature">
              <span className="f-icon">
                <Icon name={f.icon} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
