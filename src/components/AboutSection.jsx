import { ArrowUpRight } from 'lucide-react';

function AboutSection() {
  return (
    <section className="about section reveal" id="about">
      <div className="section-label">
        <span>01 / ABOUT</span>
        <span>THE PERSON BEHIND THE PIXELS</span>
      </div>

      <div className="about-grid">
        <div>
          <h2>
            Curious mind.
            <br />
            <em>Thoughtful maker.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            Saya percaya website yang hebat bukan hanya terlihat bagus — ia
            membuat hal kompleks terasa sederhana.
          </p>
          <p>
            Saat ini saya belajar IT dan full-stack development di KODEIN School
            sambil menempuh kelas 10. Saya senang memadukan design yang
            thoughtful dengan teknologi web modern untuk membuat pengalaman
            digital yang berguna dan memorable.
          </p>
          <p>
            Dari eksplorasi UI/UX sampai menulis baris kode pertama, saya
            menikmati setiap bagian dari proses menciptakan sesuatu dari nol.
          </p>
          <a className="inline-link" href="mailto:hello@adzka.dev">
            Sedikit lebih dekat <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="stats">
        <div>
          <strong>
            04<span>+</span>
          </strong>
          <small>PROJECTS BUILT</small>
        </div>
        <div>
          <strong>08</strong>
          <small>TOOLS & TECHNOLOGIES</small>
        </div>
        <div>
          <strong>∞</strong>
          <small>IDEAS TO EXPLORE</small>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;