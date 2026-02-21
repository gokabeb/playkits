import Link from "next/link"
import { Heart, Mail, MapPin, Instagram } from "lucide-react"

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
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
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
              <span className="font-serif text-xl font-medium tracking-tight text-foreground">
                Playkits.org
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Student-led nonprofit designing evidence-based playkits and training organizations to bring healing
              through play to trauma-affected children.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-rosewood" />
              <span>100% volunteer-run. 100% of donations go directly to playkits.</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground/70 leading-relaxed max-w-sm">
              Playkits.org is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the full extent of the law.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:kgupta1219@gmail.com" className="hover:text-foreground">
                  kgupta1219@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Playkits.org. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
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
