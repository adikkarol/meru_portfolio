import { site } from '../data/site'

export default function Numbers() {
  return (
    <section className="numbers">
      <div className="wrap">
        <p className="eyebrow">By the numbers</p>
        <div className="stat-grid">
          {site.stats.map((s) => (
            <div className="stat" key={s.value + s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}