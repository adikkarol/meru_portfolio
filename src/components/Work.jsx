import { useState } from 'react'
import { site } from '../data/site'
import Frame from './Frame'
import Lightbox from './Lightbox'

export default function Work() {
  const [box, setBox] = useState(null) // { items, index } | null

  return (
    <section className="section work" id="work">
      <div className="wrap">
        <div className="section__head">
          <p className="eyebrow">Selected work</p>
          <span>({String(site.projects.length).padStart(2, '0')})</span>
        </div>

        <p className="statement">{site.statement}</p>

        <div className="work__grid">
          {site.projects.map((p) => {
            const items = [
              ...(p.image ? [{ src: p.image, alt: p.alt, caption: p.title }] : []),
              ...(p.gallery ?? []).map((g) => ({ ...g, caption: g.caption ?? p.title })),
            ]
            const open = (i) => setBox({ items, index: i })

            return (
              <article
                key={p.id}
                className={['project', p.full && 'project--full', p.offset && 'project--offset']
                  .filter(Boolean).join(' ')}
              >
                {p.image ? (
                  <button
                    type="button"
                    className="project__open"
                    onClick={() => open(0)}
                    aria-label={`View ${p.title} full size`}
                  >
                    <Frame src={p.image} alt={p.alt} ratio={p.ratio}
                           hint={p.hint || `public/work/${p.id}.jpg`} />
                  </button>
                ) : (
                  <Frame src={p.image} alt={p.alt} ratio={p.ratio}
                         hint={p.hint || `public/work/${p.id}.jpg`} />
                )}

                {p.gallery?.length > 0 && (
                  <ul className="gallery" style={{ '--n': Math.min(p.gallery.length, 4) }}>
                    {p.gallery.map((g, i) => (
                      <li key={g.src}>
                        <button
                          type="button"
                          className="project__open"
                          onClick={() => open(p.image ? i + 1 : i)}
                          aria-label={`View ${g.alt || p.title} full size`}
                        >
                          <figure className="frame">
                            <img src={g.src} alt={g.alt} loading="lazy" />
                          </figure>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project__meta">
                  <span>{p.id}</span>
                  <span>{p.client} · {p.year}</span>
                </div>

                <h3 className="project__title">
                  {p.href ? <a href={p.href}>{p.title}</a> : p.title}
                </h3>
                <p className="project__blurb">{p.blurb}</p>

                <ul className="tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            )
          })}
        </div>

        {box && (
          <Lightbox
            items={box.items}
            index={box.index}
            onIndexChange={(i) => setBox((b) => ({ ...b, index: i }))}
            onClose={() => setBox(null)}
          />
        )}
      </div>
    </section>
  )
}