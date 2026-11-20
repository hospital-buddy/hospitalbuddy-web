"use client";

import { useMemo, useState } from "react";
import { procedures, plans, facilities, estimateOutOfPocket } from "@/lib/data";

type Priority = "cost" | "balanced" | "quality" | "distance";

const priorities: { id: Priority; label: string }[] = [
  { id: "cost", label: "Lowest cost" },
  { id: "balanced", label: "Balanced" },
  { id: "quality", label: "Top rated" },
  { id: "distance", label: "Closest" },
];

// Weights for [cost, distance, rating]
const weights: Record<Priority, [number, number, number]> = {
  cost: [0.7, 0.15, 0.15],
  balanced: [0.45, 0.25, 0.3],
  quality: [0.25, 0.15, 0.6],
  distance: [0.25, 0.6, 0.15],
};

const usd = (n: number) => "$" + n.toLocaleString("en-US");

export default function Demo() {
  const [procId, setProcId] = useState(procedures[0].id);
  const [planId, setPlanId] = useState("ppo");
  const [priority, setPriority] = useState<Priority>("balanced");

  const results = useMemo(() => {
    const plan = plans.find((p) => p.id === planId) ?? plans[0];
    const rows = facilities
      .filter((f) => f.prices[procId])
      .map((f) => {
        const [cash, negotiated] = f.prices[procId];
        const withPlan = estimateOutOfPocket(cash, negotiated, plan);
        const youPay = Math.min(cash, withPlan);
        return { ...f, cash, withPlan, youPay, payCash: plan.id !== "cash" && cash < withPlan };
      });
    if (!rows.length) return [];

    // Normalize each factor to 0..1 (1 = best) and blend by priority.
    const span = (vals: number[]): [number, number] => [Math.min(...vals), Math.max(...vals)];
    const [pMin, pMax] = span(rows.map((r) => r.youPay));
    const [dMin, dMax] = span(rows.map((r) => r.miles));
    const [rMin, rMax] = span(rows.map((r) => r.rating));
    const norm = (v: number, lo: number, hi: number, invert: boolean) =>
      hi === lo ? 1 : invert ? (hi - v) / (hi - lo) : (v - lo) / (hi - lo);
    const [wc, wd, wr] = weights[priority];

    return rows
      .map((r) => ({
        ...r,
        score:
          wc * norm(r.youPay, pMin, pMax, true) +
          wd * norm(r.miles, dMin, dMax, true) +
          wr * norm(r.rating, rMin, rMax, false),
      }))
      .sort((a, b) => b.score - a.score);
  }, [procId, planId, priority]);

  const spread =
    results.length > 1 ? Math.max(...results.map((r) => r.youPay)) - Math.min(...results.map((r) => r.youPay)) : 0;

  return (
    <section className="section section-alt" id="demo">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Interactive preview</span>
          <h2>See personalized recommendations in action</h2>
          <p>Change the procedure, your plan, or what matters most — the ranking updates instantly.</p>
        </div>

        <div className="demo">
          <div className="demo-controls card">
            <label>
              <span>Procedure</span>
              <select value={procId} onChange={(e) => setProcId(e.target.value)}>
                {procedures.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Your coverage</span>
              <select value={planId} onChange={(e) => setPlanId(e.target.value)}>
                {plans.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <fieldset>
              <legend>What matters most</legend>
              <div className="seg">
                {priorities.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={priority === p.id ? "active" : ""}
                    aria-pressed={priority === p.id}
                    onClick={() => setPriority(p.id)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </fieldset>
            <p className="demo-note">
              {(procedures.find((p) => p.id === procId) ?? procedures[0]).code} · Prices shown are illustrative
              sample data from fictional facilities.
            </p>
          </div>

          <div className="demo-results">
            <div className="demo-summary">
              <strong>{results.length} options nearby</strong>
              {spread > 0 && (
                <span>
                  Price spread for you: <b>{usd(spread)}</b>
                </span>
              )}
            </div>
            <ul className="results">
              {results.map((r, i) => (
                <li key={r.id} className={i === 0 ? "result card best" : "result card"}>
                  <div className="r-main">
                    <div className="r-title">
                      <strong>{r.name}</strong>
                      {i === 0 && <span className="badge">Best match</span>}
                    </div>
                    <div className="r-meta">
                      {r.type} · {r.miles} mi · ★ {r.rating}
                    </div>
                    {r.payCash && (
                      <div className="r-tip">
                        Tip: paying cash ({usd(r.cash)}) beats your insurance estimate ({usd(r.withPlan)}) here.
                      </div>
                    )}
                  </div>
                  <div className="r-price">
                    <span className="amt">{usd(r.youPay)}</span>
                    <small>est. you pay</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
