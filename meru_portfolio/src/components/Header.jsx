import { useState } from 'react'
import { site } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="wordmark" href="#top" aria-label={`${site.name} — home`}>
          {site.wordmark}<span>®</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header__cta" href={`mailto:${site.email}`}>
          Let’s talk <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '＋'}</span>
        </button>
      </div>

      <div className={`mobile-nav${open ? ' is-open' : ''}`} id="mobile-nav">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </header>
  )
}