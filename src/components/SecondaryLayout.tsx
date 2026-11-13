import type { ReactNode } from 'react'
import type { Theme } from '../App'
import SiteLayout from './SiteLayout'

export default function SecondaryLayout({ children, theme, onToggleTheme }: { children: ReactNode; theme: Theme; onToggleTheme: () => void }) {
  return <SiteLayout theme={theme} onToggleTheme={onToggleTheme}>{children}</SiteLayout>
}
