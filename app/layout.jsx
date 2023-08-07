import './globals.css'

import { Fira_Code } from "next/font/google"

export const metadata = {
  title: 'Querty',
  description: 'Personal website of Querty, a blockchain developer and pentester.',
}

const fira = Fira_Code({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  )
}

