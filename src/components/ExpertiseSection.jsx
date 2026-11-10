import { ArrowUpRight } from 'lucide-react';
import { skills } from '../data/portfolio.js';

const pillars = [
  { number: '01', title: 'UI / UX DESIGN', description: 'Clarity before decoration.' },
  {
    number: '02',
    title: 'WEB DEVELOPMENT',
    description: 'Thoughtful from the first click.',
  },
  {
    number: '03',
    title: 'CREATIVE THINKING',
    description: 'Always asking, what if?',
  },
];

function ExpertiseSection() {
  return (
    <section className="expertise section reveal" id="expertise">
      <div className="section-label">
        <span>02 / EXPERTISE</span>
        <span>MY CREATIVE TOOLKIT</span>
      </div>

      <div className="expertise-head">
        <h2>
          Ideas, meet
          <br />
          <em>execution.</em>
        </h2>
        <p>
          Tools don’t make the maker, but the right ones help bring a good idea
          to life. Here’s what I use to make it happen.
        </p>
      </div>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={skill}>
            <span className="skill-index">0{index + 1}</span>
            <span>{skill}</span>
            <ArrowUpRight size={15} />
          </div>
        ))}
      </div>

      <div className="pillars">
        {pillars.map((pillar) => (
          <div key={pillar.number}>
            <span>{pillar.number}</span>
            <b>{pillar.title}</b>
            <small>{pillar.description}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpertiseSection;