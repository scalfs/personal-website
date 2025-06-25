import Title from 'components/Title'
import { useSR } from 'hooks'
import Image from 'next/image'

const About = () => {
  const refToContainer = useSR()

  return (
    <section className="pb-28 pt-8" id="about" ref={refToContainer}>
      <div className="md:flex md:flex-row-reverse md:gap-12">
        <div className="mb-8 space-y-4 text-justify md:mb-0 md:w-3/5">
          <Title>About Me</Title>
          <p>
            My first exposure to programming was as a teenager, but I truly
            delved into it during my time in Electrical Engineering college.
            While there, I was part of a research lab focused on robotics
            combined with computer vision. There I could explore being a maker,
            working with Arduino, RaspberryPi, ESP8266, 3D printers... We built
            a custom drone in which I enabled controlling through visual markers
            using C++ and Python. For my final project, I worked on speech
            processing with recurrent neural networks by implementing a Google
            white paper.
          </p>
          <p>
            During my professional journey I worked on small to large size
            companies, taking products from 0 to 1 and beyond, leading and
            collaborating with amazing developers. Recently, my focus has been
            on contributing to the financial technology services industry
            through full stack development and engineering.
          </p>
          <p>
            I&apos;m constantly learning new things, broadening my knowledge in
            technology and other areas. Ask me about my AI driven speech side
            project. When I&apos;m not working or in front of the computer, you
            may find me reading, playing instruments, exercising and spending
            time outdoors. But most of the time, I&apos;m invested in being
            present and enjoying some quality time with my lovely family.
          </p>
        </div>
        {/* transition-transform duration-250 ease-in-out-cubic hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none */}
        <div className="group relative m-auto w-3/5 md:w-2/5">
          <div className="absolute -bottom-2 -left-4 aspect-square w-full rounded-lg bg-slate-200 transition-transform duration-250 ease-in-out-cubic group-hover:-translate-y-2 group-hover:translate-x-2 motion-reduce:transition-none motion-reduce:group-hover:transform-none" />
          <Image
            width={400}
            height={400}
            src="/img/profile.png"
            alt="Picture of the author with a serious yet welcoming expression."
            className="rounded-lg bg-gradient-to-r from-[#4586e2] to-[#214bc1] object-cover grayscale transition duration-250 ease-in-out-cubic group-hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  )
}

export default About
