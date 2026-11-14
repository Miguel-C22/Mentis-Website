import type { Theme } from '../App'
import SiteLayout from '../components/SiteLayout'

type FlowType = 'source' | 'meaning' | 'return'

type KnowledgeEntry = { no: string; title: string; copy: string }
type FlowStep = { no: string; type: FlowType; title: string; copy: string }
type NotItem = { no: string; title: string; copy: string }
type Feature = { no: string; title: string; copy: string; glyph: React.ReactNode }

const knowledgeEntries: KnowledgeEntry[] = [
  { no: '01', title: 'Notes', copy: 'Your own thinking' },
  { no: '02', title: 'Highlights', copy: 'Words worth keeping' },
  { no: '03', title: 'Resources', copy: 'Links and references' },
  { no: '04', title: 'Actions', copy: 'What you want to do' },
]

const flowSteps: FlowStep[] = [
  {
    no: '01',
    type: 'source',
    title: 'Start with anything',
    copy: 'Add a book, article, podcast, video, or anything else that sparked your curiosity.',
  },
  {
    no: '02',
    type: 'meaning',
    title: 'Capture the meaning',
    copy: 'Keep the quote, write the lesson, or save the action you want to take.',
  },
  {
    no: '03',
    type: 'return',
    title: 'Return when it matters',
    copy: 'Search your library and reconnect with the ideas you already made your own.',
  },
]

const notItems: NotItem[] = [
  { no: '01', title: 'Not a bookmarking app', copy: "Saving a source isn't the goal. What you learned from it is." },
  { no: '02', title: 'Not a social network', copy: 'No followers, likes, rankings, or public profiles.' },
  { no: '03', title: 'Not an AI chatbot', copy: 'Mentis is a library for your thinking, not a chat interface.' },
  { no: '04', title: 'Not a reading tracker', copy: "It isn't about completions. It's about owning what you learned." },
]

const features: Feature[] = [
  {
    no: '01',
    title: 'Library',
    copy: 'See books, articles, podcasts, and videos together in the view that works for you.',
    glyph: (
      <div className="feature-glyph library-glyph">
        <i /><i /><i />
      </div>
    ),
  },
  {
    no: '02',
    title: 'Search',
    copy: 'Find sources and saved knowledge by title, creator, tag, or the words you remember.',
    glyph: (
      <div className="feature-glyph search-glyph">
        <i /><b>⌕</b>
      </div>
    ),
  },
  {
    no: '03',
    title: 'Collections',
    copy: 'Group related sources into personal collections without forcing a rigid structure.',
    glyph: (
      <div className="feature-glyph capture-glyph">
        <i /><i /><i />
      </div>
    ),
  },
  {
    no: '04',
    title: 'Insights',
    copy: 'Understand what you collect, what you finish, and where your knowledge is growing.',
    glyph: (
      <div className="feature-glyph own-glyph">
        <b>INSIGHTS</b><span>↗</span>
      </div>
    ),
  },
]

const FlowIcon = ({ type }: { type: FlowType }) => {
  if (type === 'source')
    return (
      <svg viewBox="0 0 64 64">
        <rect x="13" y="16" width="29" height="36" rx="4" />
        <path d="M21 11h28a4 4 0 0 1 4 4v34" />
        <path d="M46 35v16M38 43h16" />
      </svg>
    )
  if (type === 'meaning')
    return (
      <svg viewBox="0 0 64 64">
        <path d="M13 14h38v29H31L20 52v-9h-7z" />
        <path d="M23 25h18M23 32h12" />
        <path d="m46 47 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
      </svg>
    )
  return (
    <svg viewBox="0 0 64 64">
      <circle cx="28" cy="28" r="15" />
      <path d="m39 39 13 13" />
      <path d="M23 25h10M23 31h7" />
    </svg>
  )
}

type Props = { theme: Theme; onToggleTheme: () => void }

export default function Home({ theme, onToggleTheme }: Props) {
  return (
    <SiteLayout theme={theme} onToggleTheme={onToggleTheme} home>
      <main id="main">

        {/* Hero */}
        <section className="hero" id="top">
          <div className="dot-field" />
          <div className="hero-copy">
            <h1>
              Everything you learn.<br />
              <em>Made yours.</em>
            </h1>
            <p className="lede">
              Capture the ideas that stay with you—from anything that teaches you.
            </p>
            <div className="actions">
              <span className="button">Coming Soon to iOS</span>
              <a className="text-button" href="#difference">
                Explore the idea <span>↓</span>
              </a>
            </div>
          </div>
          <div
            className="hero-product"
            aria-label="Mentis Library, Search, and Insights screens"
          >
            <div className="product-halo" />
            <div className="hero-device-crop">
              <img
                src="/assets/mentis-hero-devices-v2.png"
                alt="Mentis shown on iPhone with Library, Search, and Insights screens"
              />
            </div>
          </div>
        </section>

        {/* Difference */}
        <section className="difference" id="difference" aria-labelledby="difference-title">
          <div className="section-copy">
            <h2 id="difference-title">
              The source is where it starts.<br />
              <em>What you keep is the value.</em>
            </h2>
            <p>
              Books, articles, podcasts, videos, sermons, passages, and anything else can spark an
              idea. Mentis preserves what the source meant to you.
            </p>
          </div>
          <div className="knowledge-machine" aria-label="Any source transformed into personal knowledge">
            <div className="source">
              <div className="source-stack">
                <small>ANY SOURCE</small>
                <div>
                  <span>BOOK</span>
                  <span>ARTICLE</span>
                  <span>PODCAST</span>
                  <span>VIDEO</span>
                  <span>OTHER</span>
                </div>
                <b>01</b>
              </div>
              <p>Content item</p>
            </div>
            <div className="transform">
              <span>MAKE IT YOURS</span>
              <i />
              <b>→</b>
            </div>
            <div className="entries">
              <p>KNOWLEDGE ENTRIES</p>
              {knowledgeEntries.map(({ no, title, copy }) => (
                <article key={title}>
                  <span>{no}</span>
                  <b>{title}</b>
                  <small>{copy}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Library Showcase */}
        <section className="library-showcase" aria-labelledby="library-title">
          <div className="showcase-head">
            <div>
              <h2 id="library-title">
                Every source together.<br />
                <em>Every insight connected.</em>
              </h2>
            </div>
            <p>
              Organize what you consume into collections, then open any source to keep its notes,
              highlights, resources, and actions together.
            </p>
          </div>
          <div className="knowledge-product">
            <img
              src="/assets/mentis-knowledge-devices-v2.png"
              alt="Two iPhones showing curated Mentis Collections and an article with connected knowledge entries"
            />
            <div className="product-callouts">
              <span><b>Collections</b> organize sources your way</span>
              <span><b>Knowledge tabs</b> keep every note connected</span>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="feature-system" aria-labelledby="features-title">
          <div className="section-copy centered">
            <h2 id="features-title">
              Everything you learn.<br />
              <em>One thoughtful system.</em>
            </h2>
            <p>
              Four connected spaces help you collect, find, organize, and understand what you are
              learning.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(({ no, title, copy, glyph }) => (
              <article key={no}>
                <span className="feature-no">{no}</span>
                {glyph}
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="how" id="how" aria-labelledby="how-title">
          <div className="section-copy centered">
            <h2 id="how-title">
              Save it. Make it yours.<br />
              <em>Find it again.</em>
            </h2>
            <p>A simple path from something you discover to knowledge you can use.</p>
          </div>
          <div className="simple-flow">
            {flowSteps.map(({ no, type, title, copy }) => (
              <article key={no}>
                <span className="flow-step">{no}</span>
                <div className="flow-icon" aria-hidden="true">
                  <FlowIcon type={type} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Not Section */}
        <section className="not-section" aria-labelledby="not-title">
          <div className="not-head">
            <h2 id="not-title">
              Built for knowledge.<br />
              <em>Not feeds.</em>
            </h2>
            <p>
              The library should feel curated and personal—not noisy, automatic, or performative.
            </p>
          </div>
          <div className="not-list">
            {notItems.map(({ no, title, copy }) => (
              <article key={no}>
                <span>{no}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <b>—</b>
              </article>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="closing" id="download">
          <div className="closing-orbit" />
          <p className="eyebrow">MENTIS FOR IPHONE</p>
          <h2>
            Don't just consume.<br />
            <em>Remember.</em>
          </h2>
          <p>Give the ideas that shaped you a place to live.</p>
          <span className="button inverse">Coming Soon to iOS</span>
          <small>Private by default · Export anytime · Yours always</small>
        </section>

      </main>
    </SiteLayout>
  )
}
