// components/AnemoneLogo.jsx
export function AnemenoLogo({ size = "90%", color = '#DD5A80' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ color }}>
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M100 100 C100 60, 70 40, 55 20 C80 30, 95 55, 100 100 Z" />
        <path d="M100 100 C130 70, 160 65, 182 55 C165 78, 138 90, 100 100 Z" />
        <path d="M100 100 C140 108, 165 130, 180 155 C150 148, 122 130, 100 100 Z" />
        <path d="M100 100 C90 140, 100 165, 108 190 C80 175, 85 140, 100 100 Z" />
        <path d="M100 100 C60 118, 35 118, 15 128 C32 100, 65 92, 100 100 Z" />
        <path d="M100 100 C68 78, 55 50, 48 25 C75 38, 92 62, 100 100 Z" opacity="0.7" />
      </g>
      <circle cx="100" cy="100" r="13" fill="currentColor" opacity="0.9" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}