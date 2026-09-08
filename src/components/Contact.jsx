import { site } from '../data/site'

export default function Contact() {
  const linkedin = site.socials.find((social) => social.label === 'LinkedIn')

  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer__top">
          <p className="eyebrow">Have a role or project in mind?</p>
          <h2 className="display">Let’s make<br /><em>it matter.</em></h2>
          <a
            className="circle-link circle-link--coral"
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name}`}
          >↗</a>
        </div>

        <div className="footer__contacts">
          <div>
            <p className="eyebrow">New opportunities</p>
            <a className="mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <p className="eyebrow">LinkedIn</p>
            <a className="mail" href={linkedin.href} target="_blank" rel="noreferrer">meruyert-shyngys</a>
          </div>
        </div>

        <div className="footer__bottom">
          <a className="wordmark" href="#top">{site.wordmark}<span>®</span></a>
          {/* <div className="footer__links">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div> */}
        </div>
      </div>
    </footer>
  )
}