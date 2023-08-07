import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-screen-md min-h-screen">
        <div className="bg-gray">
          <Header />
          <main className="flex flex-col items-center justify-center py-2">
            {/* Le reste de votre contenu ici */}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
