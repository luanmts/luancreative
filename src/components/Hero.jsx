import heroBannerVideo from '../assets/hero-bannervd.mp4'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-visual" aria-hidden="true">
        <video autoPlay loop muted playsInline preload="metadata">
          <source src={heroBannerVideo} type="video/mp4" />
        </video>
      </div>
      <div className="page-container hero-inner">
        <div className="hero-intro">
          <h1 id="hero-title">
            Custom websites
            <span>for ambitious brands.</span>
          </h1>
        </div>

        <div className="hero-support">
          <p className="hero-description">
            Strategy, design and development built to make your business stand
            out.
          </p>
          <a className="hero-cta" href="#work">
            View selected work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
