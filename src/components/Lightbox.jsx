import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ items, index, onIndexChange, onClose }) {
  const panelRef = useRef(null)
  const item = items[index]

  const next = useCallback(
    () => onIndexChange((index + 1) % items.length),
    [index, items.length, onIndexChange]
  )
  const prev = useCallback(
    () => onIndexChange((index - 1 + items.length) % items.length),
    [index, items.length, onIndexChange]
  )

  // Esc closes, arrows navigate
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, next, prev])

  // lock background scroll + move focus in, restore on close
  useEffect(() => {
    const opener = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [])

  if (!item) return null

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || 'Image preview'}
      // only close when the backdrop itself is clicked, not a child
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        &times;
      </button>

      {items.length > 1 && (
        <>
          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous image">&#8249;</button>
          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next image">&#8250;</button>
        </>
      )}

      <figure className="lightbox__panel" ref={panelRef} tabIndex={-1}>
        <img className="lightbox__img" src={item.src} alt={item.alt || ''} />
        {(item.caption || items.length > 1) && (
          <figcaption className="lightbox__caption">
            {item.caption}
            {items.length > 1 && (
              <span className="lightbox__count">{index + 1} / {items.length}</span>
            )}
          </figcaption>
        )}
      </figure>
    </div>,
    document.body
  )
}