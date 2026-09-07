import { site } from '../data/site'
import Frame from './Frame'

export default function About() {
  const { about } = site

  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section__head">
          <p className="eyebrow">A little about me</p>
          <span>{site.role}</span>
        </div>

        <div className="about">
          <Frame
            src={about.portrait}
            alt={about.portraitAlt}
            ratio="4 / 5"
            hint="public/work/portrait.jpg"
          />

          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead' : ''}>{p}</p>
            ))}

            <p className="eyebrow about__label">Toolkit</p>
            <ul className="tags tags--wrap">
              {about.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}