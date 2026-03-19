const RoyalLogo = () => (
  <svg
    viewBox="0 0 360 90"
    className="h-12 transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_gold]"
  >
    <defs>
      <linearGradient id="goldMain" x1="0" x2="1">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
    </defs>

    <path d="M50 25 L56 10 L64 20 L72 10 L78 25 Z" fill="url(#goldMain)" />

    <text x="40" y="55" fontSize="36" fontWeight="700" fill="#b91c1c">
      ROYAL
    </text>

    <text x="42" y="75" fontSize="13" fill="#1e3a8a" letterSpacing="2">
      MOTOR DRIVING SCHOOL
    </text>
  </svg>
);

export default RoyalLogo;
