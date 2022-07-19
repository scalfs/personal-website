const Main = ({
  greeting = 'Hi, there 👋 My name is',
  title = 'Vitor Escalfoni.',
  description = "I'm a software engineer specialized in mobile app development, passionate about crafting great user experiences and implementing beautiful designs. Looking foward to building things with a new team."
}) => (
  <main className="flex min-h-screen bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 py-20">
    <div>
      <h3 className="px-5 text-xl leading-tight tracking-tight text-gray-600 sm:mt-5 sm:text-2xl">
        {greeting}
      </h3>
      <h1 className="px-5 text-4xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-6xl">
        {title}
      </h1>
      <h2 className="mt-5 max-w-2xl px-5 tracking-tight text-gray-600 sm:text-xl md:mt-5 md:text-xl">
        {description}
      </h2>
    </div>
  </main>
)

export default Main
