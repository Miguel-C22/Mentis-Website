import type { Theme } from '../App'
import PageHero from '../components/PageHero'
import SecondaryLayout from '../components/SecondaryLayout'

const groups = [
  ['Getting Started', [
    ['How do I add a source to my library?', 'Tap the + button on the Library screen, choose a content type, then search by title or enter the details manually.'],
    ['What content types does Mentis support?', 'Mentis supports books, podcasts, videos, and articles, with a flexible foundation for other learning sources.'],
  ]],
  ['Capturing Knowledge', [
    ['What kinds of knowledge entries can I save?', 'Four types: Notes, Highlights, Resources, and Actions.'],
    ['Can I add multiple entries to the same source?', 'Yes. Each source supports as many knowledge entries as you need.'],
  ]],
  ['Collections', [
    ['How do collections work?', 'Collections let you group related sources your way without forcing a rigid structure.'],
  ]],
  ['Account & Data', [
    ['Can I export my data?', 'Yes. Open Settings and choose Export Data to download your library and knowledge entries.'],
    ['How do I delete my account?', 'Open Settings, scroll to the bottom, and choose Delete Account. This permanently removes your data.'],
  ]],
] as const

export default function Support({theme,onToggleTheme}:{theme:Theme;onToggleTheme:()=>void}) {
  return <SecondaryLayout theme={theme} onToggleTheme={onToggleTheme}><main id="main"><PageHero kicker="Support" title="Help & FAQ"><p>Find quick answers about building your library, capturing what you learn, and managing your Mentis account.</p></PageHero><div className="container page-content narrow">{groups.map(([title,items])=><section className="faq" key={title}><h2>{title}</h2><div className="faq-list">{items.map(([question,answer],index)=><details key={question} open={title==='Getting Started'&&index===0}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>)}<section className="support-contact"><h2>Still have a question?</h2><p>Email us at <a href="mailto:support@mentisapp.com">support@mentisapp.com</a></p></section></div></main></SecondaryLayout>
}
