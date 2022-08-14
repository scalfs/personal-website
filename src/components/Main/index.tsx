import About from 'components/About'
import Contact from 'components/Contact'
import Experience from 'components/Experience'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import LayoutBlur from 'components/LayoutBlur'

const Main = () => (
  <div>
    <Header />

    <LayoutBlur type="top" />

    <main className="mx-auto max-w-5xl overflow-hidden px-4 sm:px-6 sm:text-lg md:px-8">
      <Hero />

      <About />

      <Experience />

      <Contact />
    </main>

    <Footer />
  </div>
)

export default Main
