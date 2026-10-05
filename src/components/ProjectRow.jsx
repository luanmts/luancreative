import ProjectCarousel from './ProjectCarousel'

function ProjectVisual({ index, title, image, carouselImages }) {
  return (
    <div className={`project-visual project-visual--${index}`}>
      {carouselImages?.length ? (
        <ProjectCarousel
          images={carouselImages}
          projectName={title}
          altPrefix={`${title} project`}
        />
      ) : image ? (
        <img src={image} alt={`${title} project preview`} />
      ) : (
        <span className="project-visual-placeholder">Project visual</span>
      )}
    </div>
  )
}

function ProjectRow({ index, title, description, role, industry, platform, image, carouselImages, href, reverse }) {
  return (
    <article className={`project-row${reverse ? ' project-row--reverse' : ''}`} data-scroll-reveal>
      <ProjectVisual index={index} title={title} image={image} carouselImages={carouselImages} />

      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <dl className="project-meta">
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Industry</dt>
            <dd>{industry}</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>{platform}</dd>
          </div>
        </dl>

      </div>
    </article>
  )
}

export default ProjectRow
