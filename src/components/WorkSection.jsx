import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import { projects } from '../data/portfolio.js';

function ProjectCard({ project }) {
  return (
    <a
      className="project"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      key={project.id}
    >
      <div className={`project-art ${project.style}`}>
        {project.image && (
          <img className="art-img" src={project.image} alt={project.name} loading="lazy" />
        )}
        <div className="art-top">
          <span>ADZKA® / PROJECT {project.id}</span>
          <span>
            <MoveUpRight size={16} />
          </span>
        </div>
        {!project.image && <div className="art-mark">{project.mark}</div>}
        <div className="art-bottom">
          <span>{project.type}</span>
          <span>2024—25</span>
        </div>
        {project.style === 'calc' && !project.image && (
          <div className="calc-mini">
            <b>7</b>
            <span>
              ÷　×　−
              <br />
              <br />
              4　5　6
              <br />
              <br />
              1　2　3
              <br />
              <br />
              0　.　=
            </span>
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-title">
          <span>{project.id}</span>
          <h3>{project.name}</h3>
          <ArrowUpRight className="project-arrow" size={19} />
        </div>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

function WorkSection() {
  return (
    <section className="work section reveal" id="work">
      <div className="section-label">
        <span>03 / SELECTED WORK</span>
        <span>A FEW THINGS I’VE MADE</span>
      </div>

      <div className="work-heading">
        <h2>
          Made with
          <br />
          <em>curiosity.</em>
        </h2>
        <p>
          A collection of experiments, ideas, and little pieces of the internet.
          Each project taught me something new.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;