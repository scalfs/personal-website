import Title from 'components/Title'
import Image from 'next/image'

const About = () => (
  <section className="pt-8 pb-28" id="about">
    <div className="md:flex md:flex-row-reverse md:gap-12">
      <div className="mb-8 space-y-4 text-justify md:mb-0 md:w-3/5">
        <Title>About Me</Title>
        <p>
          My first contact with programming was as a teenager, but I got to
          really explore it in Electrical Engineering college. During my time
          there I was part of a research lab working with robotics allied to
          computer vision and did my final project in speech processing using
          recurrent neural networks.
        </p>
        <p>
          Started my professional journey as an intern at a large e-commerce
          company, being hired shortly after. Had a great experience working
          with app development and felt like I&apos;d found my calling. Later, I
          had a terrific opportunity to lead the mobile project on an inventory
          management tech company with customers from all over the world.
        </p>
        <p>
          I&apos;m constantly learning new things, specializing in frontend
          while broadening my knowledge in other areas. When I&apos;m not
          working or in front of the computer, you may find me running, riding
          my bike everywhere, and spending time outdoors in nature. Otherwise,
          I&apos;m mostly watching movies/series with my wife, cooking, playing
          the guitar, or entertaining our cat Juju.
        </p>
      </div>

      <div className="m-auto w-3/5 transition-transform duration-250 ease-in-out-cubic hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none md:w-2/5">
        <Image
          width={400}
          height={400}
          src="/img/profile.png"
          alt="Picture of the author. A half smiling professional man."
          className="squircle bg-gradient-to-r from-[#4586e2] to-[#214bc1] object-cover object-center grayscale transition-colors duration-250 ease-in-out-cubic hover:grayscale-0"
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
