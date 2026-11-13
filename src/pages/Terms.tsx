import type { Theme } from '../App'
import PageHero from '../components/PageHero'
import SecondaryLayout from '../components/SecondaryLayout'

const sections = [
  ['use','Use of the App','Mentis is a personal knowledge tool intended for individual use. You must be at least 13 years old to use the app. You are responsible for keeping your account information accurate and your sign-in credentials secure.'],
  ['content','Your Content','You own the notes, highlights, resources, actions, and other entries you create in Mentis. You grant us only the limited permission required to store, process, and sync that content for you.'],
  ['prohibited','Prohibited Use',"Do not use Mentis to store illegal content, interfere with the app, or attempt to access another user's account or data."],
  ['termination','Termination','We may suspend accounts that violate these terms. You may delete your account at any time from Settings in the app.'],
  ['disclaimer','Disclaimer','Mentis is provided as-is. While we work to keep the service reliable, we encourage you to export your library regularly as a backup.'],
] as const

export default function Terms({theme,onToggleTheme}:{theme:Theme;onToggleTheme:()=>void}) { return <SecondaryLayout theme={theme} onToggleTheme={onToggleTheme}><main id="main"><PageHero kicker="The ground rules" title="Terms of Use"><p className="updated">Last updated: January 1, 2025</p></PageHero><div className="container page-content narrow legal-layout"><ol className="legal-index" aria-label="On this page">{sections.map(([id,title])=><li key={id}><a href={`#${id}`}>{title}</a></li>)}<li><a href="#contact">Contact</a></li></ol><div>{sections.map(([id,title,copy],index)=><section id={id} className="legal" key={id}><h2>{index+1}. {title}</h2><p>{copy}</p></section>)}<section id="contact" className="legal"><h2>6. Contact</h2><p>Questions about these terms? Email <a href="mailto:legal@mentisapp.com">legal@mentisapp.com</a>.</p></section></div></div></main></SecondaryLayout> }
