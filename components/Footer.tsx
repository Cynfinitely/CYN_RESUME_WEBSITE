import Image from "next/image";
import { socials } from "@/data/socials";

const links = [
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "YouTube", href: socials.youtube },
  { label: "Medium", href: socials.medium },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a href={socials.github} className="site-footer__logo" aria-label="GitHub profile">
          <Image
            src="/img/logo.png"
            alt="CYN logo"
            width={180}
            height={60}
            className="site-footer__logo-image"
          />
        </a>

        <nav className="site-footer__nav" aria-label="Social links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
