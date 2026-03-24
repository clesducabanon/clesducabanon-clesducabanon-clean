import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://www.clesducabanon.fr/og-image.jpg',
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:image', ogImage, true);
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Robots
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Structured Data - update instead of remove/create
    if (structuredData) {
      let script = document.querySelector('script[data-seo-head="true"]') as HTMLScriptElement;
      
      if (!script) {
        // Create new script only if it doesn't exist
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-head', 'true');
        document.head.appendChild(script);
      }
      
      // Update content
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null;
}

// Données structurées LocalBusiness
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Les Clés du Cabanon - Conciergerie Premium Sanary Hyères',
  image: 'https://www.clesducabanon.fr/logo.jpg',
  '@id': 'https://www.clesducabanon.fr',
  url: 'https://www.clesducabanon.fr',
  telephone: '+33625401480',
  email: 'contact@les-cles-du-cabanon.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Toulon',
    postalCode: '83000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.1242,
    longitude: 5.928,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '€€',
  description:
    'Conciergerie premium spécialisée en gestion complète de villas et appartements Airbnb. 2 formules: Premium 20% TTC (Sanary/Hyères) avec intervention terrain, Digitale 180€/mois (France entière). Tarification dynamique, Superhôte 4.9/5. 585 propriétaires satisfaits.',
  areaServed: [
    'Sanary-sur-Mer',
    'Hyères',
    'Giens',
    'Toulon',
    'Bandol',
    'Six-Fours-les-Plages',
    'La Seyne-sur-Mer',
    'Carqueiranne',
    'La Londe-les-Maures',
    'Bormes-les-Mimosas',
    'Le Pradet',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de conciergerie Airbnb',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Formule Premium 20% TTC',
          description:
            'Gestion 100% complète de votre villa ou appartement à Sanary-sur-Mer et Hyères : création annonces, tarification dynamique, communication 24/7, remise clés, états des lieux, coordination ménage, intervention terrain 7j/7. 42 propriétaires satisfaits.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Les Clés du Cabanon',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestion Digitale 180€/mois',
          description:
            'Gestion à distance pour biens en France et international : annonces optimisées, tarification dynamique, communication voyageurs 24/7, calendrier synchronisé, photos professionnelles. Vous gérez les clés et le ménage. 543 propriétaires satisfaits.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Les Clés du Cabanon',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestion villa bord de mer prestige',
          description:
            'Spécialistes de la gestion de villas de prestige en bord de mer entre Sanary et Giens. Vue mer panoramique, piscine à débordement, propriétés pieds dans l\'eau. Clientèle CSP+ internationale.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Les Clés du Cabanon',
          },
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/clesducabanon',
    'https://www.instagram.com/clesducabanon',
    'https://www.airbnb.fr/users/show/clesducabanon',
  ],
});

// Données structurées FAQ
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});