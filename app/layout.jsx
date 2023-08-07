import './globals.css'

export const metadata = {
  title: 'Querty',
  description: 'Personal website of Querty, a blockchain developer and pentester.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-fira-code">{children}</body>
    </html>
  )
}

