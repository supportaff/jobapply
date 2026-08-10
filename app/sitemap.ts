import type { MetadataRoute } from 'next'

const slugs = ['how-to-find-a-job-faster','how-to-get-more-interviews','done-for-you-job-application-services','how-many-jobs-should-you-apply-to','job-search-in-the-usa','job-search-in-the-uk','job-search-in-canada','resume-and-profile-analysis','swot-analysis-for-job-search','interview-preparation-guide']

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://apply-ten.vercel.app'
  return [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    ...slugs.map(slug => ({ url: `${base}/blog/${slug}`, changeFrequency: 'monthly' as const, priority: 0.8 }))
  ]
}
