import Particles from 'react-tsparticles'
import styled from 'styled-components'

const ParticleWrapper = styled.div`
  #tsparticles {
    height: 100%;
  }
`

const ParticlesBg: React.FC = () => {
  return (
    <ParticleWrapper className="fixed inset-0 z-0 w-screen h-screen">
      <Particles
        options={{
          fps_limit: 60,
          background: {
            color: 'transparent',
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: 'random',
              distance: 300,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              collisions: true,
              direction: 'none',
              enable: true,
              out_mode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, value_area: 1000 }, value: 40 },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 2,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: 4,
            },
          },
          retina_detect: true,
        }}
      />
    </ParticleWrapper>
  )
}

export default ParticlesBg
