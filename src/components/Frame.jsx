/**
 * Frame — drop-in image holder.
 * <Frame src="/work/01.jpg" alt="..." ratio="3 / 4" hint="/work/01.jpg" />
 * If src is empty it renders an editable placeholder telling you where to
 * put the file, so the layout never collapses.
 */
export default function Frame({ src, alt = '', ratio = '4 / 3', hint, label }) {
  return (
    <figure className="frame" style={{ '--ratio': ratio }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="frame__empty">
          <span>Add image</span>
          <code>{hint || 'public/work/your-image.jpg'}</code>
        </div>
      )}
      {label && <figcaption className="frame__label">{label}</figcaption>}
    </figure>
  )
}