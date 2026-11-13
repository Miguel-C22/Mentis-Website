import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Support from './pages/Support'
import Contact from './pages/Contact'

export type Theme = 'dark' | 'light'

function ScrollAndTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const titles: Record<string, string> = {
      '/': 'Mentis — Everything you learn, made yours',
      '/privacy': 'Privacy Policy — Mentis',
      '/terms': 'Terms of Use — Mentis',
      '/support': 'Support & FAQ — Mentis',
      '/contact': 'Contact — Mentis',
    }
    document.title = titles[pathname] ?? 'Mentis'
  }, [pathname])
  return null
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('mentis-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('mentis-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#EAEAEA' : '#1A1A1A')
  }, [theme])

  const toggleTheme = () => setTheme((value) => value === 'dark' ? 'light' : 'dark')

  return (
    <>
      <ScrollAndTitle />
      <Routes>
        <Route path="/" element={<Home theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/privacy" element={<Privacy theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/terms" element={<Terms theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/support" element={<Support theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/contact" element={<Contact theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
