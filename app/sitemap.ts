import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.newjourneyworld.com';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/services',
    '/success',
    '/contact',
    '/blog',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const serviceRoutes = [
    '/services/student-visa',
    '/services/work-visa',
    '/services/pr-visa',
    '/services/visitor-visa',
    '/services/business-visa',
    '/services/family-visa',
    '/services/ielts-coaching',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Country pages
  const countryRoutes = [
    '/country/canada',
    '/country/australia',
    '/country/usa',
    '/country/uk',
    '/country/new-zealand',
    '/country/germany',
    '/country/singapore',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...countryRoutes];
}
