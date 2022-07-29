import Header from 'components/Header'
import Hero from 'components/Hero'
import LayoutBlur from 'components/LayoutBlur'

const Main = () => (
  <div className="min-h-screen bg-gray-50 text-zinc-900">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <LayoutBlur />

      <Header />

      <Hero />
    </div>
  </div>
)

export default Main
