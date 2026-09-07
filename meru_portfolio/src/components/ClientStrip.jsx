import { site } from '../data/site'

export default function ClientStrip() {
  const row = [...site.clients, ...site.clients] // duplicated for a seamless loop

  return (
    <section className="strip" aria-label="Brands I've worked with">
      <div className="strip__track">
        {row.map((client, i) => (
          <span key={`${client}-${i}`} className="strip__item">
            {client}<i aria-hidden="true">◆</i>
          </span>
        ))}
      </div>
    </section>
  )
}