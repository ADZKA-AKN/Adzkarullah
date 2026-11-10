import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-top">
          <span className="eyebrow">
            <i /> AVAILABLE FOR SELECT PROJECTS
          </span>
          <span className="location">
            JAKARTA, ID <span className="sep">/</span> 2025—26
          </span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="intro">HALO, SAYA MUHAMMAD ADZKARULLAH</p>
            <h1>
              Building digital
              <br />
              things with <em>cooperation.</em>
            </h1>
            <p className="hero-desc">
              Saya seorang developer & designer yang mengubah ide menjadi
              pengalaman digital yang terasa berbeda — purposeful, polished,
              and made to last.
            </p>
            <div className="hero-actions">
              <a className="button light" href="#work">
                Jelajahi karya <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#about">
                Kenali saya <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="orb-wrap">
            <div className="portrait-stage">
              <div className="portrait-frame">
                <img src="/images/adzka-profile.jpg" alt="Muhammad Adzkarullah" />
                <div className="portrait-shade" />
                <span className="portrait-index">ADZKA® — 001</span>
                <span className="portrait-tag">
                  DESIGN
                  <br />
                  MEETS CODE
                </span>
              </div>
              <div className="portrait-ring ring-a" />
              <div className="portrait-ring ring-b" />
              <span className="portrait-star">✳</span>
            </div>
            <div className="orb-note">
              DIGITAL CRAFT
              <br />
              <b>EST. 2022</b>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>
            SCROLL TO EXPLORE <ArrowDownRight size={14} />
          </span>
          <span>INDEPENDENT CREATIVE DEVELOPER</span>
          <span>01 — 04</span>
        </div>
      </section>

      <div className="ticker" aria-label="Design and development">
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>
              DESIGN <b>✳</b> DEVELOPMENT <b>✳</b> DIGITAL CRAFT <b>✳</b> BUILT
              WITH INTENTION <b>✳</b>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;