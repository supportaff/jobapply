import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JobApply — We apply. You interview.',
  description: 'A done-for-you job application service. We find relevant roles, tailor applications and support you through the interview process for 3 months.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}