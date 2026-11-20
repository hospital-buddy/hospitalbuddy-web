import Logo from "./Logo";

export default async function Footer() {
  "use cache";

  // Cached so the year is prerendered once instead of read at build/request time.
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <Logo size={28} />
          <span>
            Hospital<strong>Buddy</strong>
          </span>
        </div>
        <p className="disclaimer">
          HospitalBuddy provides price information for educational and planning purposes only. It is not medical
          advice and estimates are not a guarantee of cost. In an emergency, call 911.
        </p>
        <p className="copy">© {new Date().getFullYear()} HospitalBuddy.org</p>
      </div>
    </footer>
  );
}
