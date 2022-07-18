const Main = ({
  title = 'Vitor Escalfoni',
  description = 'Software Engineer specialized in mobile app development.'
}) => (
  <main>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <img
      src="/img/hero-illustration.svg"
      alt="A developer facing a screen with code"
    />
  </main>
)

export default Main
