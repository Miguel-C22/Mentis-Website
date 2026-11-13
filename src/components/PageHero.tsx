type Props = { kicker: string; title: string; children?: React.ReactNode }

export default function PageHero({ kicker, title, children }: Props) {
  return <header className="page-hero"><div className="container narrow"><p className="kicker">{kicker}</p><h1>{title}</h1>{children}</div></header>
}
