import Title from 'components/Title'
import Image from 'next/image'

const About = () => (
  <section className="pt-8 pb-28" id="about">
    <div className="md:flex md:flex-row-reverse md:gap-12">
      <div className="mb-8 space-y-4 text-justify md:mb-0 md:w-3/5">
        <Title>About Me</Title>
        <p>
          I had some contact with programming as a teenager, but it was during
          my graduation that my interest in it developed. I have an Electrical
          Engineering degree on which I spent most of my time chasing
          programming projects. As a research lab member, I worked with robotics
          allied to computer vision and did my final project in speech
          processing using recurrent neural networks.
        </p>
        <p>
          Started my professional journey as an intern at a large e-commerce
          company, being hired shortly after. Had a great experience working
          with mobile development there and have been deepening my craft ever
          since. I&apos;m constantly learning new things, specializing in some
          fronts while broadening knowledge in others.
        </p>
        <p>
          When I&apos;m not working or in front of the computer, you may find me
          running, riding my bike everywhere, and spending time outdoors in
          nature. Otherwise, I&apos;m watching movies/series with my wife,
          cooking, playing the guitar, or entertaining our cat Juju.
        </p>
      </div>

      <div
        style={{ clipPath: `url(#squircleClip)` }}
        className="m-auto h-fit w-3/5 transition-transform duration-250 ease-in-out-cubic hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none md:w-2/5"
      >
        <Image
          width={400}
          height={400}
          src="/img/profile.png"
          alt="Picture of the author. A half smiling professional man."
          className="bg-gradient-to-r from-[#4586e2] to-[#214bc1] object-cover object-center grayscale transition duration-250 ease-in-out-cubic hover:grayscale-0"
        />
      </div>
    </div>

    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
      <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
        <path
          fill="red"
          stroke="none"
          d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
        />
      </clipPath>
    </svg>
  </section>
)

export default About
