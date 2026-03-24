import { Facebook, Instagram, Mail, Phone, Users, Plane, Home, Building2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">LES CLÉS DU CABANON</h3>
                <p className="text-sm text-gray-400">Conciergerie</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Conciergerie haut de gamme pour la gestion complète de vos villas et appartements sur la Côte Varoise, 
              de Sanary-sur-Mer à Hyères. Maximisez vos revenus en toute sérénité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/proprietaire"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Espace Propriétaire
                </a>
              </li>
              <li>
                <a
                  href="/voyageurs"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Plane className="w-4 h-4" />
                  Espace Voyageurs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:contact@les-cles-du-cabanon.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@les-cles-du-cabanon.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <a href="tel:+33625401480" className="text-gray-400 hover:text-white transition-colors">
                  06 25 40 14 80
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Les Clés du Cabanon. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="/cgv" className="text-gray-400 hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}