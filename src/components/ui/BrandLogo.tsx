type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img" className="h-full w-full">
          <defs>
            <linearGradient id="markGradient" x1="10" x2="54" y1="8" y2="58">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="45%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path
            d="M15 12h16c13 0 22 8 22 20s-9 20-22 20H15V12Z"
            fill="none"
            stroke="url(#markGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <path
            d="M17 32h28M35 22l10 10-10 10"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <circle cx="17" cy="32" r="4" fill="#07111f" stroke="#a7f3d0" strokeWidth="2" />
        </svg>
      </div>
      {!compact && (
        <span>
          <span className="block text-sm font-bold tracking-tight text-ink">DeliveryFlow AI</span>
          <span className="block text-xs text-slate-500">Agentic Delivery Framework</span>
        </span>
      )}
    </div>
  );
}
