import type { Theme } from '../App'
import PageHero from '../components/PageHero'
import SecondaryLayout from '../components/SecondaryLayout'

const sections = [
  ['collect','What We Collect',<><p>We collect the account information you provide when you sign in, such as your name and email address. We also store the content you choose to add to your library, including sources, notes, highlights, resources, and actions.</p><p>We may collect basic usage data to understand how Mentis is used and where we can improve the experience.</p></>],
  ['use','How We Use It',<p>We use your information to provide and improve Mentis, authenticate your identity, and sync your library and knowledge entries across your sessions. We do not sell your personal information.</p>],
  ['storage','Data Storage',<p>Your data is stored securely on our servers. We use reasonable safeguards designed to protect your information.</p>],
  ['services','Third-Party Services',<p>Mentis may use trusted services for authentication, storage, and error monitoring. These services process limited information on our behalf and have their own privacy policies.</p>],
  ['rights','Your Rights',<p>You can export your data at any time from Settings. You can also request full account deletion from within the app.</p>],
  ['contact','Contact',<p>If you have a privacy question, email us at <a href="mailto:privacy@mentisapp.com">privacy@mentisapp.com</a>.</p>],
] as const

export default function Privacy({theme,onToggleTheme}:{theme:Theme;onToggleTheme:()=>void}) { return <SecondaryLayout theme={theme} onToggleTheme={onToggleTheme}><main id="main"><PageHero kicker="Your data, clearly explained" title="Privacy Policy"><p className="updated">Last updated: January 1, 2025</p></PageHero><div className="container page-content narrow legal-layout"><ol className="legal-index" aria-label="On this page">{sections.map(([id,title])=><li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol><div>{sections.map(([id,title,copy],index)=><section id={id} className="legal" key={id}><h2>{index+1}. {title}</h2>{copy}</section>)}</div></div></main></SecondaryLayout> }
