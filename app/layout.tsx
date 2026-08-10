import './globals.css'
import './mobile-fixes.css'
import './effects.css'
import './auth.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JobApply | Done-for-You Job Application Service & Career Support',
  description: 'JobApply is a managed job application service for professionals worldwide. Get candidate profile analysis, SWOT analysis, targeted job search, tailored applications, application tracking and interview preparation for a minimum 3 months.',
  keywords: [
    'job application service', 'job application service USA', 'job application service UK', 'job application service Canada', 'job application service Australia',
    'done for you job applications', 'done for you job search', 'job search service', 'professional job search service', 'job search assistance',
    'job application help', 'job search help', 'job application support', 'career support service', 'career advancement service', 'career coaching support',
    'resume screening', 'candidate profile analysis', 'candidate SWOT analysis', 'career SWOT analysis', 'job search strategy', 'job application strategy',
    'tailored job applications', 'job application tracking', 'job search management', 'interview preparation', 'interview coaching', 'interview support',
    'global job search', 'international job search', 'overseas job search', 'remote job search', 'executive job search', 'senior professional job search',
    'LinkedIn job applications', 'Indeed job applications', 'Glassdoor job search', 'Naukri job applications', 'international career opportunities',
    'technology jobs', 'IT jobs', 'cybersecurity jobs', 'software engineering jobs', 'engineering jobs', 'finance jobs', 'marketing jobs', 'consulting jobs',
    'jobs in USA', 'jobs in Canada', 'jobs in UK', 'jobs in Australia', 'jobs in Germany', 'jobs in Singapore', 'jobs in UAE', 'jobs in India',
    'find a job', 'get more interviews', 'job search support', 'career transition', 'career change support'
  ],
  authors: [{ name: 'JobApply' }], creator: 'JobApply', publisher: 'JobApply', robots: { index: true, follow: true }, alternates: { canonical: '/' },
  openGraph: { title: 'JobApply | We Find. We Apply. You Interview.', description: 'A managed job application service covering candidate analysis, targeted job discovery, tailored applications, tracking and interview preparation.', type: 'website', siteName: 'JobApply' },
  twitter: { card: 'summary_large_image', title: 'JobApply | Done-for-You Job Applications', description: 'Get professional job search support from candidate analysis through interview preparation.' },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
