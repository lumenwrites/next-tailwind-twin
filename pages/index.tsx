import Button from '../components/Elements/Button'
import Card from '../components/Elements/Card'
import tw, { styled, css } from 'twin.macro'
import Text from '../components/Elements/Text'

const Home = () => {
  return (
    <Container>
      <Button large>Button Text</Button>
      <Card />
      <Text/>
    </Container>
  )
}

const Container = tw.div`flex min-h-screen flex-col items-center justify-center py-2`

export default Home
