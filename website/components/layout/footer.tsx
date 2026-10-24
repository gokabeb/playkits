import Link from "next/link"
import { Heart, Mail, MapPin, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  "Our Work": [
    { label: "Playkits", href: "/playkits" },
    { label: "The Science", href: "/science" },
    { label: "Partners", href: "/partners" },
  ],
  Organization: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Stories", href: "/stories" },
  ],
  "Get Involved": [
    { label: "Donate", href: "/donate" },
    { label: "Partner With Us", href: "/partners" },
    { label: "Volunteer", href: "/contact" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/playkitsorg", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/karanguptasf/", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-forest">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                <img
                  src="/playkitslogo.svg"
                  alt="Playkits logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-serif text-xl font-medium tracking-tight text-cream">
                Playkits.org
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-cream/70">
              Student-led nonprofit designing evidence-based playkits and training organizations to bring healing
              through play to trauma-affected children.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-cream/70">
              <Heart className="h-4 w-4 text-gold" />
              <span>100% volunteer-run. 100% of donations go directly to playkits.</span>
            </div>
            <p className="mt-4 text-xs text-cream/50 leading-relaxed max-w-sm">
              Playkits.org is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the full extent of the law.
            </p>

            {/* Press */}
            <a
              href="https://www.kqed.org/perspectives/201601145776/karan-gupta-more-than-a-board-game"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs text-gold/80 transition-colors hover:bg-gold/20 hover:text-gold"
            >
              <span>🎙</span>
              <span>As heard on KQED</span>
            </a>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-cream/70">
                <Mail className="h-4 w-4 text-cream/40" />
                <a href="mailto:karan@guptasf.com" className="hover:text-cream transition-colors">
                  karan@guptasf.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-cream/70">
                <MapPin className="h-4 w-4 text-cream/40" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-cream/90">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-forest-light/30 pt-8 sm:flex-row">
          <p className="text-sm text-cream/50">
            © {new Date().getFullYear()} Playkits.org. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 transition-colors hover:text-cream"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
