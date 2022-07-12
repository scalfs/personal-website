import * as S from './styles'

const Main = ({
  title = 'Vitor Escalfoni',
  description = 'Software Engineer specialized in mobile app development.'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing a screen with code"
    />
  </S.Wrapper>
)

export default Main
