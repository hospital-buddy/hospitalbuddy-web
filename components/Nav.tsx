"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#demo", label: "Try the demo" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Logo />
          <span>
            Hospital<strong>Buddy</strong>
          </span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#waitlist" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Join the waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
