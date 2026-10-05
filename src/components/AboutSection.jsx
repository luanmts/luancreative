import aboutImage from '../assets/edited-photo.png'
import claudeIcon from '../assets/tools/claude.webp'
import figmaIcon from '../assets/tools/Figma-logo.svg.webp'
import cursorIcon from '../assets/tools/cursor_code_editor-logo_brandlogos.net_r1yfy-512x512.png'
import framerIcon from '../assets/tools/framer-logo-rounded-free-png.webp'
import githubIcon from '../assets/tools/github-white-icon.webp'
import javascriptIcon from '../assets/tools/javascript-logo-0.png'
import nextjsIcon from '../assets/tools/nextjs.png'
import vercelIcon from '../assets/tools/vercel-logo.webp'

const tools = [
  { name: 'Figma', image: figmaIcon },
  { name: 'Framer', image: framerIcon },
  { name: 'JavaScript', image: javascriptIcon },
  { name: 'Next.js', image: nextjsIcon },
  { name: 'Vercel', image: vercelIcon },
  { name: 'GitHub', image: githubIcon },
  { name: 'Cursor', image: cursorIcon },
  { name: 'Claude', image: claudeIcon },
]

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="page-container about-section-inner">
        <div className="about-top-row">
          <article className="about-panel" data-scroll-reveal>
            <h2 id="about-title">About Me:</h2>
            <div className="about-copy">
              <p>
                I&apos;m a web designer and developer focused on building custom
                digital experiences for ambitious brands.
              </p>
              <p>
                My work combines strategy, interface design and development to
                create websites that feel clear, distinctive and purposeful.
              </p>
              <p>
                I approach every project with attention to structure, visual
                hierarchy and execution, building digital experiences designed
                around the needs of each business.
              </p>
            </div>
          </article>

          <div className="about-portrait" data-scroll-reveal data-reveal-delay="1">
            <img src={aboutImage} alt="Portrait of Luan" />
          </div>
        </div>

        <div className="tool-stack-panel" aria-labelledby="tool-stack-title" data-scroll-reveal>
          <h2 id="tool-stack-title">Tool Stack</h2>
          <div className="tool-list tool-list--desktop">
            {tools.map((tool) => (
              <img
                className={`tool-mark tool-mark--${tool.name.toLowerCase()}`}
                key={tool.name}
                src={tool.image}
                alt={`${tool.name} logo`}
              />
            ))}
          </div>

          <div className="tool-carousel" aria-label="Tool stack">
            <div className="tool-carousel-track">
              {[0, 1].map((setIndex) => (
                <div className="tool-carousel-set" key={setIndex} aria-hidden={setIndex === 1}>
                  {tools.map((tool) => (
                    <img
                      className={`tool-mark tool-mark--${tool.name.toLowerCase()}`}
                      key={`${setIndex}-${tool.name}`}
                      src={tool.image}
                      alt={setIndex === 0 ? `${tool.name} logo` : ''}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
