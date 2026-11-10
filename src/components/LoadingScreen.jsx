import { useEffect, useRef, useState } from 'react';

const DURATION = 2200;
const COLUMNS = 6;

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 200 : DURATION;

    document.body.classList.add('is-loading');
    document.body.style.overflow = 'hidden';

    const finish = () => {
      setExiting(true);
      document.body.classList.add('is-ready');
      document.body.classList.remove('is-loading');
      document.body.style.overflow = '';
      timeoutRef.current = window.setTimeout(() => setVisible(false), reduced ? 60 : 1100);
    };

    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(timeoutRef.current);
      document.body.classList.remove('is-loading');
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader${exiting ? ' is-exiting' : ''}`} aria-hidden="true">
      <div className="loader-cols">
        {Array.from({ length: COLUMNS }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="loader-inner">
        <div className="loader-top">
          <span>ADZKA® — DIGITAL CREATOR</span>
          <span>PORTFOLIO 2025</span>
        </div>

        <div className="loader-mid">
          <span className="loader-tag">
            <i /> BUILDING THE EXPERIENCE
          </span>
          <div className="loader-word">
            <span className="loader-word-base">ADZKA®</span>
            <span className="loader-word-fill" style={{ '--p': `${progress}%` }}>
              ADZKA®
            </span>
          </div>
          <div className="loader-bar">
            <i style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
        </div>

        <div className="loader-bottom">
          <span>LOADING THE GOOD STUFF</span>
          <span className="loader-count">{String(progress).padStart(3, '0')}</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
