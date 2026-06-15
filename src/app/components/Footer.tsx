import { Facebook, Instagram, Mail, Phone, Users, Plane, Home, Building2, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" style={{ background: '#1a2744', color: 'rgba(255,255,255,0.7)' }}>
      {/* Gold top accent */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0AADA3, #C9A84C)' }}>
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="font-bold text-white" style={{ letterSpacing: '0.05em' }}>LES CLÉS DU CABANON</h3>
                <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A84C' }}>Conciergerie</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Conciergerie haut de gamme pour la gestion complète de vos villas et appartements sur la Côte Varoise,
              de Sanary-sur-Mer à Hyères. Maximisez vos revenus en toute sérénité.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full" style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)' }}>
                Villa <span className="font-bold">20% TTC</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full" style={{ background: 'rgba(10,173,163,0.12)', color: '#4ECDC4', border: '1px solid rgba(10,173,163,0.25)' }}>
                Appartement <span className="font-bold">25% TTC</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', icon: <Home className="w-4 h-4" />, label: 'Accueil' },
                { href: '/proprietaire', icon: <Users className="w-4 h-4" />, label: 'Espace Propriétaire' },
                { href: '/voyageurs', icon: <Plane className="w-4 h-4" />, label: 'Espace Voyageurs' },
                { href: '/services', icon: <Building2 className="w-4 h-4" />, label: 'Nos Services' },
                { href: '/tarifs', icon: <MapPin className="w-4 h-4" />, label: 'Nos Tarifs' },
                { href: '/contact', icon: <Mail className="w-4 h-4" />, label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@les-cles-du-cabanon.com"
                  className="flex items-start gap-2 text-sm transition-colors hover:text-white group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#C9A84C] transition-colors" />
                  contact@les-cles-du-cabanon.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33625401480"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white group"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  <Phone className="w-4 h-4 group-hover:text-[#0AADA3] transition-colors" />
                  06 25 40 14 80
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Facebook"
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,168,76,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Instagram"
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(10,173,163,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {currentYear} Les Clés du Cabanon. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/mentions-legales" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Mentions légales
            </a>
            <a href="/cgv" className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
