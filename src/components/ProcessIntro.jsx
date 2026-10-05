import ProjectRow from './ProjectRow'
import blackSheepImage from '../assets/works/01-blacksheep.jpg'
import complettiImage from '../assets/works/02-completti.jpg'
import nomaImage from '../assets/works/03-noma.jpg'
import { blackSheepSlides, complettiSlides } from '../data/projectCarousels'

const projects = [
  {
    index: '01',
    title: 'Black Sheep Traffic',
    description:
      'Black Sheep is an advanced protection tool designed to help businesses navigate digital threats with greater clarity, control and confidence.',
    role: 'Web Design · Development',
    industry: 'Digital protection',
    platform: 'Custom Website',
    image: blackSheepImage,
    carouselImages: [blackSheepImage, ...blackSheepSlides],
    href: '#work',
  },
  {
    index: '02',
    title: 'Completti',
    description:
      'Completti is a premium ergonomic chair brand that brings considered comfort, refined materials and thoughtful design to the everyday workspace.',
    role: 'Web Design · Development',
    industry: 'Furniture & workspace',
    platform: 'Custom Shopify',
    image: complettiImage,
    carouselImages: [complettiImage, ...complettiSlides],
    href: '#work',
    reverse: true,
  },
  {
    index: '03',
    title: 'Noma',
    description:
      'Noma is a digital banking brand focused on making everyday finance feel simpler, clearer and more connected.',
    role: 'Web Design · Development',
    industry: 'Digital banking',
    platform: 'Custom Website',
    image: nomaImage,
    href: '#work',
  },
]

function ProcessIntro() {
  return (
    <section className="process-intro" id="work" aria-labelledby="process-title">
      <div className="process-intro-inner" data-scroll-reveal>
        <h2 id="process-title">Strategy. Design. Development.</h2>
        <p>
          Everything your brand needs to turn an idea into a distinctive, high-performing digital experience.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectRow key={project.index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProcessIntro
