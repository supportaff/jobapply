import './globals.css'
import './mobile-fixes.css'
import './effects.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JobApply — We apply. You interview.',
  description: 'A managed job application service. We find relevant roles, tailor applications and support you through the interview process for a minimum of 3 months.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}