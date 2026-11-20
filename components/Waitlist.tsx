"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

// TODO: replace with a real signup endpoint when the app launches.
const CONTACT_EMAIL = "hello@hospitalbuddy.org";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("HospitalBuddy waitlist");
    const body = encodeURIComponent(`Please add me to the waitlist.\n\nEmail: ${email}\nZIP: ${zip}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="waitlist">
      <div className="container">
        <div className="cta card">
          <div>
            <h2>Be first to find fair prices near you</h2>
            <p>Join the waitlist for early access to the HospitalBuddy app.</p>
          </div>
          <form className="cta-form" onSubmit={onSubmit}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{5}"
              placeholder="ZIP"
              aria-label="ZIP code"
              value={zip}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setZip(e.target.value)}
            />
            <button type="submit" className="btn btn-accent">
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
