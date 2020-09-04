import { PageWrapper, AnimatedName, Divider, FlashText } from 'components/home'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <div className="container relative">
        <div className="text-white text-center">
          <FlashText isTop />
          <AnimatedName text="Paul Simon" />
          <Divider />
          <AnimatedName text="Ongpin" inverted />
          <FlashText isTop={false} />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Home
