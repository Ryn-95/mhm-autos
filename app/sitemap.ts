import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mhmautos.fr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mhmautos.fr/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mhmautos.fr/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://mhmautos.fr/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
