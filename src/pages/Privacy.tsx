import type { Theme } from '../App'
import PageHero from '../components/PageHero'
import SiteLayout from '../components/SiteLayout'

type Props = { theme: Theme; onToggleTheme: () => void }

type Section = {
  id: string
  title: string
  content: React.ReactNode
}

const sections: Section[] = [
  {
    id: 'collect',
    title: 'What We Collect',
    content: (
      <>
        <p>
          We collect the account information you provide when you sign in, such as your name and
          email address. We also store the content you choose to add to your library, including
          sources, notes, highlights, resources, and actions.
        </p>
        <p>
          We may collect basic usage data to understand how Mentis is used and where we can improve
          the experience.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How We Use It',
    content: (
      <p>
        We use your information to provide and improve Mentis, authenticate your identity, and sync
        your library and knowledge entries across your sessions. We do not sell your personal
        information.
      </p>
    ),
  },
  {
    id: 'storage',
    title: 'Data Storage',
    content: (
      <p>
        Your data is stored securely on our servers. We use reasonable safeguards designed to
        protect your information.
      </p>
    ),
  },
  {
    id: 'services',
    title: 'Third-Party Services',
    content: (
      <p>
        Mentis may use trusted services for authentication, storage, and error monitoring. These
        services process limited information on our behalf and have their own privacy policies.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your Rights',
    content: (
      <p>
        You can export your data at any time from Settings. You can also request full account
        deletion from within the app.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <p>
        If you have a privacy question, email us at{' '}
        <a href="mailto:privacy@mentisapp.com">privacy@mentisapp.com</a>.
      </p>
    ),
  },
]

export default function Privacy({ theme, onToggleTheme }: Props) {
  return (
    <SiteLayout theme={theme} onToggleTheme={onToggleTheme}>
      <main id="main">
        <PageHero kicker="Your data, clearly explained" title="Privacy Policy">
          <p className="updated">Last updated: January 1, 2025</p>
        </PageHero>
        <div className="container page-content narrow legal-layout">
          <ol className="legal-index" aria-label="On this page">
            {sections.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ol>
          <div>
            {sections.map(({ id, title, content }, index) => (
              <section id={id} className="legal" key={id}>
                <h2>
                  {index + 1}. {title}
                </h2>
                {content}
              </section>
            ))}
          </div>
        </div>
      </main>
    </SiteLayout>
  )
}
