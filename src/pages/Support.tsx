import type { Theme } from '../App'
import PageHero from '../components/PageHero'
import SiteLayout from '../components/SiteLayout'

type Props = { theme: Theme; onToggleTheme: () => void }

type FaqItem = { question: string; answer: string }
type FaqGroup = { title: string; items: FaqItem[] }

const groups: FaqGroup[] = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'How do I add a source to my library?',
        answer:
          'Tap the + button on the Library screen, choose a content type, then search by title or enter the details manually.',
      },
      {
        question: 'What content types does Mentis support?',
        answer:
          'Mentis supports books, podcasts, videos, and articles, with a flexible foundation for other learning sources.',
      },
    ],
  },
  {
    title: 'Capturing Knowledge',
    items: [
      {
        question: 'What kinds of knowledge entries can I save?',
        answer: 'Four types: Notes, Highlights, Resources, and Actions.',
      },
      {
        question: 'Can I add multiple entries to the same source?',
        answer: 'Yes. Each source supports as many knowledge entries as you need.',
      },
    ],
  },
  {
    title: 'Collections',
    items: [
      {
        question: 'How do collections work?',
        answer:
          'Collections let you group related sources your way without forcing a rigid structure.',
      },
    ],
  },
  {
    title: 'Account & Data',
    items: [
      {
        question: 'Can I export my data?',
        answer:
          'Yes. Open Settings and choose Export Data to download your library and knowledge entries.',
      },
      {
        question: 'How do I delete my account?',
        answer:
          'Open Settings, scroll to the bottom, and choose Delete Account. This permanently removes your data.',
      },
    ],
  },
]

export default function Support({ theme, onToggleTheme }: Props) {
  return (
    <SiteLayout theme={theme} onToggleTheme={onToggleTheme}>
      <main id="main">
        <PageHero kicker="Support" title="Help & FAQ">
          <p>
            Find quick answers about building your library, capturing what you learn, and managing
            your Mentis account.
          </p>
        </PageHero>
        <div className="container page-content narrow">
          {groups.map(({ title, items }, groupIndex) => (
            <section className="faq" key={title}>
              <h2>{title}</h2>
              <div className="faq-list">
                {items.map(({ question, answer }, index) => (
                  <details
                    key={question}
                    open={groupIndex === 0 && index === 0}
                  >
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
          <section className="support-contact">
            <h2>Still have a question?</h2>
            <p>
              Email us at{' '}
              <a href="mailto:support@mentisapp.com">support@mentisapp.com</a>
            </p>
          </section>
        </div>
      </main>
    </SiteLayout>
  )
}
