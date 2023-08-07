import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <div className="bg-gray">
          <Header />
          <main className="flex flex-col items-center justify-center py-2">
            {/* Votre contenu principal ici */}
          </main>
        </div>
        <Footer />
    </>
  )
}

