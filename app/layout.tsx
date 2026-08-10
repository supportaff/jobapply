import './globals.css'
import './mobile-fixes.css'
import './effects.css'
import './auth.css'
import './blog/blog.css'
import './blog-preview.css'
import type { Metadata } from 'next'

const siteUrl = 'https://apply-ten.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'JobApply | Managed Job Search & Job Application Service',
    template: '%s | JobApply',
  },
  description: 'JobApply provides managed job search and done-for-you job application support for professionals worldwide, including candidate analysis, targeted applications, application tracking and interview preparation.',
  keywords: [
    'job application service', 'managed job search', 'done for you job applications', 'done for you job search',
    'job search service', 'professional job search service', 'job search assistance', 'job application help',
    'job application support', 'career support service', 'career advancement service', 'career transition support',
    'candidate profile analysis', 'candidate SWOT analysis', 'career SWOT analysis', 'job search strategy',
    'tailored job applications', 'job application tracking', 'job search management', 'interview preparation',
    'interview coaching', 'global job search', 'international job search', 'overseas job search', 'remote job search',
    'executive job search', 'senior professional job search', 'LinkedIn job applications', 'Indeed job applications',
    'Glassdoor job search', 'Naukri job applications', 'international career opportunities', 'technology jobs',
    'IT jobs', 'cybersecurity jobs', 'software engineering jobs', 'engineering jobs', 'finance jobs', 'marketing jobs',
    'consulting jobs', 'jobs in USA', 'jobs in Canada', 'jobs in UK', 'jobs in Australia', 'jobs in Germany',
    'jobs in Singapore', 'jobs in UAE', 'jobs in India', 'find a job', 'get more interviews', 'job search support',
    'career change support', 'job application strategy', 'international career support',
  ],
  authors: [{ name: 'JobApply' }],
  creator: 'JobApply',
  publisher: 'JobApply',
  category: 'Career Services',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'JobApply | Managed Job Search & Job Application Service',
    description: 'Get structured job search support from candidate profile analysis and targeted applications through application tracking and interview preparation.',
    type: 'website',
    url: siteUrl,
    siteName: 'JobApply',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobApply | Managed Job Search & Job Applications',
    description: 'Professional job search support from candidate analysis through targeted applications and interview preparation.',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
