import Transition from 'components/Transition'

const Hero = () => {
  return (
    <section className="flex h-screen">
      <Transition timeout={750} type="none">
        <div className="my-auto max-w-2xl space-y-4 text-justify text-xl sm:text-2xl">
          <Transition isChild type="fadeup">
            <h1>Hi, there! My name is</h1>
          </Transition>
          <Transition isChild delay={150} type="fadeup">
            <h2 className="bg-gradient-to-r from-[#4586e2] to-[#214bc1] bg-clip-text text-6xl font-extrabold leading-none tracking-tight text-transparent sm:text-[5rem]">
              Vitor Escalfoni.
            </h2>
          </Transition>
          <Transition isChild delay={300} type="fadeup">
            <h3>
              A{' '}
              <span className="font-medium">
                product-minded software engineer
              </span>{' '}
              who combines technical expertise with{' '}
              <span className="font-medium">AI-driven innovation</span> to take
              products{' '}
              <span className="font-medium">from 0 to 1 and beyond</span>,
              building transformative solutions that{' '}
              <span className="font-medium">
                users love and businesses scale
              </span>
              .
            </h3>
          </Transition>
        </div>
      </Transition>
    </section>
  )
}

export default Hero
