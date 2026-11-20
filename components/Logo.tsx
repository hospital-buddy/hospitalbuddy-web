export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="var(--brand)" />
      <path d="M26 14h12v12h12v12H38v12H26V38H14V26h12z" fill="#fff" />
      <circle cx="46" cy="46" r="9" fill="var(--accent)" stroke="var(--brand)" strokeWidth="3" />
      <text x="46" y="50.5" fontFamily="Arial" fontWeight="700" fontSize="12" textAnchor="middle" fill="var(--brand)">$</text>
    </svg>
  );
}
