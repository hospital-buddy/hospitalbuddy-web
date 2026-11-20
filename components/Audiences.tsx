import Icon, { type IconName } from "./Icon";

const audiences: { icon: IconName; title: string; items: string[] }[] = [
  {
    icon: "user",
    title: "Patients & families",
    items: ["Compare before you book", "Understand your real share", "Spot when cash is cheaper"],
  },
  {
    icon: "briefcase",
    title: "Employers & benefits teams",
    items: ["Steer members to high-value care", "Lower plan spend", "Simple, shareable tools"],
  },
  {
    icon: "building",
    title: "Fair-priced providers",
    items: ["Get found for great value", "Showcase quality and price", "Reach patients who shop"],
  },
];

export default function Audiences() {
  return (
    <section className="section" id="who">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Who it&apos;s for</span>
          <h2>Built for everyone who pays for care</h2>
        </div>
        <div className="grid-3">
          {audiences.map((a) => (
            <article key={a.title} className="card audience">
              <span className="f-icon">
                <Icon name={a.icon} />
              </span>
              <h3>{a.title}</h3>
              <ul className="checks">
                {a.items.map((it) => (
                  <li key={it}>
                    <Icon name="check" size={18} />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
