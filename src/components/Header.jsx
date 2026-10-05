import { useEffect, useRef, useState } from 'react'
import profileImage from '../assets/perfil.png'

function Header() {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollPosition = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY

      if (currentPosition < 72) {
        setIsHidden(false)
      } else if (currentPosition > lastScrollPosition.current) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollPosition.current = currentPosition
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${isHidden ? ' site-header--hidden' : ''}`}>
      <div className="page-container header-inner">
        <a className="brand" href="#top" aria-label="Luan Oliver home">
          <img className="brand-mark" src={profileImage} alt="" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-name">Luan Oliver</span>
            <span className="brand-role">Web Designer &amp; Developer</span>
          </span>
        </a>

        <div className="header-actions">
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
          </nav>
          <a className="header-cta" href="#contact">
            Let&apos;s Work Together
          </a>
          <button className="menu-trigger" type="button" aria-label="Open menu">
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
