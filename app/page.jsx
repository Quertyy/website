import Header from '../components/header'
import Footer from '../components/footer'
import Whoami from '../components/whoami'

export default function Home() {
  return (
    <>
        <div className="bg-gray">
          <Header />
          <main className="py-10">
            <Whoami />
          </main>
        </div>
        <Footer />
    </>
  )
}

