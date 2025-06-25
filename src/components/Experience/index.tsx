import Jobs from 'components/Jobs'
import Title from 'components/Title'
import { useSR } from 'hooks'

const Experience = () => {
  const refToContainer = useSR()

  return (
    <section className="space-y-4 py-28" id="experience" ref={refToContainer}>
      <Title>Work Experience</Title>
      <p>
        I had the opportunity to be part of teams developing products since the
        conception, going through design, release, growth and mantainance
        cycles. All companies I worked for were focused on technology and
        startup minded. I could contribute to the development process while
        collaborating with other teams in fast paced environments.
      </p>
      <Jobs />
    </section>
  )
}

export default Experience
