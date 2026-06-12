import Image from "next/image";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { SocialIcon, type SocialPlatform } from "@/components/icons/SocialIcons";

const links: { label: string; href: string; icon: SocialPlatform }[] = [
  { label: "GitHub", href: socials.github, icon: "github" },
  { label: "LinkedIn", href: socials.linkedin, icon: "linkedin" },
  { label: "YouTube", href: socials.youtube, icon: "youtube" },
  { label: "Medium", href: socials.medium, icon: "medium" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const displayName = profile.name
    .split(" ")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <footer className="site-footer">
      <p className="site-footer__ornament-rule" aria-hidden="true">
        &#10022; &nbsp; &#10022; &nbsp; &#10022;
      </p>
      <div className="site-footer__inner">
        <a href={socials.github} className="site-footer__logo" aria-label="GitHub profile">
          <Image
            src="/img/logo.png"
            alt="CYN logo"
            width={100}
            height={34}
            className="site-footer__logo-image"
          />
        </a>

        <nav className="site-footer__nav" aria-label="Social links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="site-footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <SocialIcon platform={link.icon} className="site-footer__social-icon" />
            </a>
          ))}
        </nav>
      </div>

      <p className="site-footer__copyright">
        © {year} {displayName} · {profile.location}
      </p>
    </footer>
  );
}
