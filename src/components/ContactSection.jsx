import { ArrowUpRight, Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ADZKA-AKN', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-adzkarullah-4b5a82397/', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/a.dzk_4/', Icon: Instagram },
  { label: 'WhatsApp', href: 'https://wa.me/6285943652388', Icon: MessageCircle },
];

function ContactSection() {
  return (
    <section className="contact section reveal" id="contact">
      <div className="section-label">
        <span>04 / CONTACT</span>
        <span>HAVE SOMETHING IN MIND?</span>
      </div>

      <div className="contact-inner">
        <span className="eyebrow">
          <i /> OPEN TO WHAT’S NEXT
        </span>
        <h2>
          Let’s make
          <br />
          <em>something matter.</em>
        </h2>
        <a className="contact-mail" href="https://wa.me/6285943652388" target="_blank" rel="noreferrer">
          Let’s talk <br />
          <ArrowUpRight size={20} />
        </a>
        <div className="contact-bottom">
          <p>
            Good things start with a conversation.
            <br />
            Tell me what you’re dreaming up.
          </p>
          <div className="socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                aria-label={label}
                href={href}
                target={href.startsWith('https://') ? '_blank' : undefined}
                rel={href.startsWith('https://') ? 'noreferrer' : undefined}
                key={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;