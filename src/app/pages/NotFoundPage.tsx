import { Home, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page non trouvée - 404 | Les Clés du Cabanon"
        description="La page que vous recherchez n'existe pas. Retournez à l'accueil de notre conciergerie."
        canonicalUrl="https://www.clesducabanon.fr/404"
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </a>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}