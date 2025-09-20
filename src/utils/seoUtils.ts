// SEO utility functions

export const generateLocalBusinessSchema = (options: {
  name: string;
  url: string;
  description: string;
  telephone?: string;
  address?: {
    locality: string;
    region: string;
    country?: string;
  };
  areaServed?: string[];
  serviceType?: string[];
  priceRange?: string;
  image?: string;
  logo?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: options.name,
  url: options.url,
  description: options.description,
  ...(options.telephone && { telephone: options.telephone }),
  ...(options.address && {
    address: {
      '@type': 'PostalAddress',
      addressLocality: options.address.locality,
      addressRegion: options.address.region,
      ...(options.address.country && { addressCountry: options.address.country })
    }
  }),
  ...(options.areaServed && { areaServed: options.areaServed }),
  ...(options.serviceType && { serviceType: options.serviceType }),
  ...(options.priceRange && { priceRange: options.priceRange }),
  ...(options.image && { image: options.image }),
  ...(options.logo && { logo: options.logo })
});

export const generateServiceSchema = (options: {
  name: string;
  description: string;
  provider: {
    name: string;
    address?: {
      locality: string;
      region: string;
      country?: string;
    };
  };
  areaServed?: string[];
  serviceType?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: options.name,
  description: options.description,
  provider: {
    '@type': 'LocalBusiness',
    name: options.provider.name,
    ...(options.provider.address && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: options.provider.address.locality,
        addressRegion: options.provider.address.region,
        ...(options.provider.address.country && { addressCountry: options.provider.address.country })
      }
    })
  },
  ...(options.areaServed && { areaServed: options.areaServed }),
  ...(options.serviceType && { serviceType: options.serviceType })
});

export const generateWebsiteSchema = (options: {
  name: string;
  url: string;
  searchActionUrl?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: options.name,
  url: options.url,
  ...(options.searchActionUrl && {
    potentialAction: {
      '@type': 'SearchAction',
      target: options.searchActionUrl,
      'query-input': 'required name=search_term_string'
    }
  })
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const generateOrganizationSchema = (options: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    locality: string;
    region: string;
    country?: string;
  };
  telephone?: string;
  email?: string;
  sameAs?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: options.name,
  url: options.url,
  ...(options.logo && { logo: options.logo }),
  ...(options.description && { description: options.description }),
  ...(options.address && {
    address: {
      '@type': 'PostalAddress',
      addressLocality: options.address.locality,
      addressRegion: options.address.region,
      ...(options.address.country && { addressCountry: options.address.country })
    }
  }),
  ...(options.telephone && { telephone: options.telephone }),
  ...(options.email && { email: options.email }),
  ...(options.sameAs && { sameAs: options.sameAs })
});

// Common SEO constants
export const SITE_CONFIG = {
  name: 'Peak Properties',
  domain: 'peakpropertiesllc.com',
  url: 'https://peakpropertiesllc.com',
  telephone: '(303) 555-PEAK',
  address: {
    locality: 'Boulder',
    region: 'CO',
    country: 'US'
  },
  areaServed: [
    'Boulder, CO',
    'Longmont, CO',
    'Louisville, CO',
    'Lafayette, CO',
    'Superior, CO',
    'Broomfield, CO',
    'Erie, CO',
    'Niwot, CO',
    'Gunbarrel, CO'
  ],
  serviceTypes: [
    'Property Management',
    'Rental Property Management',
    'Tenant Screening',
    'Property Leasing',
    'Maintenance Management',
    'Real Estate Services'
  ]
};