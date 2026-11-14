import type { FormEvent } from 'react'
import type { Theme } from '../App'
import PageHero from '../components/PageHero'
import SiteLayout from '../components/SiteLayout'

type Props = { theme: Theme; onToggleTheme: () => void }

export default function Contact({ theme, onToggleTheme }: Props) {
  const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  return (
    <SiteLayout theme={theme} onToggleTheme={onToggleTheme}>
      <main id="main">
        <PageHero kicker="We're here to help" title="Contact Mentis">
          <p>
            Questions, feedback, or something not working as expected? Reach the right place below.
          </p>
        </PageHero>
        <div className="container page-content contact-layout">
          <section className="contact-form-card" aria-labelledby="message-title">
            <div className="form-heading">
              <p className="kicker">Send a message</p>
              <h2 id="message-title">How can we help?</h2>
              <p>
                Share a question, problem, or idea. This preview form is ready for a future email
                or support integration.
              </p>
            </div>
            <form className="contact-form" onSubmit={preventSubmit}>
              <div className="form-row">
                <label>
                  First name
                  <input
                    type="text"
                    name="first-name"
                    autoComplete="given-name"
                    placeholder="Your first name"
                  />
                </label>
                <label>
                  Last name
                  <input
                    type="text"
                    name="last-name"
                    autoComplete="family-name"
                    placeholder="Your last name"
                  />
                </label>
              </div>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                What can we help with?
                <select name="topic" defaultValue="General question">
                  <option>General question</option>
                  <option>Product support</option>
                  <option>Account & data</option>
                  <option>Privacy</option>
                  <option>Feedback or feature idea</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Tell us what's on your mind…"
                />
              </label>
              <div className="form-actions">
                <button className="button" type="submit">
                  Send message <span>↗</span>
                </button>
                <small>Demo form — submissions are not enabled yet.</small>
              </div>
            </form>
          </section>
          <aside className="contact-aside">
            <div>
              <h3>Looking for a quick answer?</h3>
              <p>
                Visit <a href="/support">Support & FAQ</a> for help with sources, knowledge
                entries, collections, accounts, and exports.
              </p>
            </div>
            <div>
              <h3>Prefer email?</h3>
              <p>
                Product support
                <br />
                <a href="mailto:support@mentisapp.com">support@mentisapp.com</a>
              </p>
              <p>
                Privacy questions
                <br />
                <a href="mailto:privacy@mentisapp.com">privacy@mentisapp.com</a>
              </p>
            </div>
          </aside>
        </div>
      </main>
    </SiteLayout>
  )
}
