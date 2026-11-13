import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Theme } from '../App'

type Props = {
  children: ReactNode
  theme: Theme
  onToggleTheme: () => void
  home?: boolean
}

export default function SiteLayout({ children, theme, onToggleTheme, home = false }: Props) {
  return (
    <div className={home ? 'home-page' : 'secondary-page'}>
      <a className="skip" href="#main">Skip to content</a>
<header className="nav-shell">
        <Link className="logo" to="/"><span className="logo-mark" />Mentis<span>.</span></Link>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-pressed={theme === 'light'}><span className="sun">☼</span><span className="moon">◐</span></button>
          <span className="button button-small">Coming Soon to iOS</span>
        </div>
      </header>
      {children}
      <footer>
        <Link className="logo" to="/"><span className="logo-mark" />Mentis<span>.</span></Link>
        <p>A personal knowledge library.</p>
        <nav aria-label="Footer"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/support">Support</Link><Link to="/contact">Contact</Link></nav>
        <span>© 2026 Mentis</span>
      </footer>
    </div>
  )
}
