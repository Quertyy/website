import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md min-h-screen font-fira-code">
      <Header />
      <main className="flex flex-col items-center justify-center py-2">
        {/* Le reste de votre contenu ici */}
      </main>
    </div>
  )
}
