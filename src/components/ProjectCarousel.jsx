import { useEffect, useRef, useState } from 'react'

function ProjectCarousel({ images, projectName, altPrefix }) {
  const viewportRef = useRef(null)
  const dragState = useRef(null)
  const frameRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return undefined

    const handleWheel = (event) => {
      const horizontalGesture = Math.abs(event.deltaX) > Math.abs(event.deltaY)
      const delta = horizontalGesture ? event.deltaX : event.deltaY
      const maximumScroll = viewport.scrollWidth - viewport.clientWidth
      const canScroll = delta < 0 ? viewport.scrollLeft > 1 : viewport.scrollLeft < maximumScroll - 1

      if (!delta || !canScroll) return

      event.preventDefault()
      viewport.scrollBy({ left: delta, behavior: 'auto' })
    }

    viewport.addEventListener('wheel', handleWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', handleWheel)
  }, [])

  const updateActiveSlide = () => {
    const viewport = viewportRef.current
    if (!viewport || !viewport.clientWidth) return

    const nextSlide = Math.round(viewport.scrollLeft / viewport.clientWidth)
    setActiveSlide(Math.max(0, Math.min(images.length - 1, nextSlide)))
  }

  const handleScroll = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(updateActiveSlide)
  }

  const canScroll = (direction) => {
    const viewport = viewportRef.current
    if (!viewport) return false

    const maximumScroll = viewport.scrollWidth - viewport.clientWidth
    return direction < 0 ? viewport.scrollLeft > 1 : viewport.scrollLeft < maximumScroll - 1
  }

  const handlePointerDown = (event) => {
    if (event.pointerType === 'touch') return

    const viewport = viewportRef.current
    if (!viewport) return

    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
    }
    viewport.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  const handlePointerMove = (event) => {
    const drag = dragState.current
    const viewport = viewportRef.current
    if (!drag || !viewport || drag.pointerId !== event.pointerId) return

    viewport.scrollLeft = drag.startScrollLeft - (event.clientX - drag.startX)
  }

  const finishDrag = (event) => {
    const viewport = viewportRef.current
    if (dragState.current?.pointerId !== event.pointerId) return

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId)
    }

    dragState.current = null
    setIsDragging(false)
  }

  const handleKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return

    const direction = event.key === 'ArrowLeft' ? -1 : 1
    if (!canScroll(direction)) return

    event.preventDefault()
    viewportRef.current.scrollBy({
      left: viewportRef.current.clientWidth * direction,
      behavior: 'smooth',
    })
  }

  const goToSlide = (nextSlide) => {
    const viewport = viewportRef.current
    if (!viewport) return

    viewport.scrollTo({
      left: viewport.clientWidth * nextSlide,
      behavior: 'smooth',
    })
  }

  return (
    <div className="project-carousel">
      <div
        ref={viewportRef}
        className={`project-carousel-viewport${isDragging ? ' is-dragging' : ''}`}
        role="region"
        aria-label={`${projectName} project carousel`}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        {images.map((image, slideIndex) => (
          <div className="project-carousel-slide" key={image} aria-hidden={slideIndex !== activeSlide}>
            <img
              src={image}
              alt={`${altPrefix} — slide ${slideIndex + 1}`}
              loading={slideIndex === 0 ? 'eager' : 'lazy'}
              draggable="false"
            />
          </div>
        ))}
      </div>

      <div className="project-carousel-navigation" aria-label={`${projectName} slide controls`}>
        <button
          className="project-carousel-control"
          type="button"
          aria-label="Previous slide"
          disabled={activeSlide === 0}
          onClick={() => goToSlide(activeSlide - 1)}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          className="project-carousel-control"
          type="button"
          aria-label="Next slide"
          disabled={activeSlide === images.length - 1}
          onClick={() => goToSlide(activeSlide + 1)}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="project-carousel-pagination" aria-label={`${projectName} slide pagination`}>
        {images.map((image, slideIndex) => (
          <button
            className={`project-carousel-dot${slideIndex === activeSlide ? ' is-active' : ''}`}
            type="button"
            key={image}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={slideIndex === activeSlide ? 'true' : undefined}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCarousel
