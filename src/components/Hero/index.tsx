import Transition from 'components/Transition'

const Hero = () => {
  return (
    <section className="flex h-screen">
      <Transition timeout={750} type="none">
        <div className="my-auto max-w-xl space-y-4 text-justify text-xl sm:text-2xl">
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
              I&apos;m a <span className="font-medium">software engineer</span>{' '}
              specialized in{' '}
              <span className="font-medium">mobile app development,</span>{' '}
              passionate about crafting great user experiences and implementing
              beautiful designs.
            </h3>
          </Transition>
        </div>
      </Transition>
    </section>
  )
}

export default Hero
