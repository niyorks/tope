export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" strokeLinecap="round" />
    </svg>
  )
}

export function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M15 17H9a6 6 0 01-6-6V9a9 9 0 0118 0v2a6 6 0 01-6 6z" />
      <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M1 3h12M3 7h8M5 11h4" strokeLinecap="round" />
    </svg>
  )
}

export function CommentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M13 1H2a1 1 0 00-1 1v8a1 1 0 001 1h3l2.5 3L10 11h3a1 1 0 001-1V2a1 1 0 00-1-1z" />
    </svg>
  )
}

export function RetweetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M1 9l3 3 3-3M4 12V5a3 3 0 013-3h7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 5l-3-3-3 3M14 2v7a3 3 0 01-3 3H4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 15 14" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M7.5 12.5S1 8.5 1 4.5a3.5 3.5 0 017-.35A3.5 3.5 0 0114 4.5c0 4-6.5 8-6.5 8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ShareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M9 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6H5a4 4 0 000 8h1" strokeLinecap="round" />
    </svg>
  )
}

export function DotsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 4" fill="currentColor">
      <circle cx="2" cy="2" r="1.5" />
      <circle cx="8" cy="2" r="1.5" />
      <circle cx="14" cy="2" r="1.5" />
    </svg>
  )
}
