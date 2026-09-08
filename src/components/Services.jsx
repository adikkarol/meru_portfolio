import { site } from '../data/site'

export default function Services() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="section__head">
          <p className="eyebrow">What I do</p>
          <span>({String(site.services.length).padStart(2, '0')})</span>
        </div>

        <div className="services">
          <h2 className="display">Strategy with<br />a point of <em>view.</em></h2>

          <div className="service-list">
            {site.services.map((s) => (
              <article className="service" key={s.id}>
                <span>{s.id}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}