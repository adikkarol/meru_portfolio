import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="hero wrap">
      <p className="hero__name" aria-hidden="true">{site.name}</p>
      <h2 className="sr-only">{site.name} — {site.role}</h2>

      <div className="hero__bar">
        <span>{site.role}</span>
        <span>{site.location}</span>
        <span className="hero__status">{site.availability}</span>
      </div>

      <div className="hero__grid">
        <div className="hero__title">
          <span className="mark" aria-hidden="true" />
          <h1>
            {site.tagline[0]}<br />{site.tagline[1]}
          </h1>
        </div>

        <div className="hero__side">
          <p className="hero__lead">{site.lead}</p>
          <div className="hero__actions">
            <a className="circle-link" href="#work" aria-label="See selected work">↗</a>
            <a className="text-link" href={site.resumeUrl} download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}