import Button from 'components/Button'
import LayoutBlur from 'components/LayoutBlur'
import Title from 'components/Title'
import { useSR } from 'hooks'

const Contact = () => {
  const refToContainer = useSR()

  return (
    <section
      id="contact"
      ref={refToContainer}
      className="relative mx-auto max-w-xl py-28 text-center"
    >
      <LayoutBlur type="lines" />

      <Title>Get in Touch</Title>

      <p>
        Right now I am looking for new opportunities. So, if you want to discuss
        a project, ask any question or just want to say hi, feel free to reach
        me. I&apos;ll be glad to get back at you as soon as possible.
      </p>

      <Button
        className="mx-auto mt-8 block w-fit"
        href="mailto:hello@vitorescalfoni.com"
      >
        Say Hello
      </Button>
    </section>
  )
}

export default Contact
