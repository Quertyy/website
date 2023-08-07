import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mx-auto max-w-screen-md">
        <div className="bg-gray">
          <Header />
          <main className="flex flex-col items-center justify-center py-2">

          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
