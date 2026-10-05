import instagramLogo from '../assets/Instagram_logo.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-section-group">
          <p className="footer-label">Sections</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#work">Works</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-socials" aria-label="Social links">
          <span>Social:</span>
          <a
            className="footer-instagram"
            href="https://www.instagram.com/iamluancreative/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src={instagramLogo} alt="" />
          </a>
        </div>

        <div className="footer-credits">
          <p>© 2026 Luan Creative. All rights reserved.</p>
          <p>Designed &amp; developed by Luan Oliver</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
