import styled from '@emotion/styled'

const Content = styled.div`
  width: ${props => props.width};
  max-width: 100%;
  margin: 0 auto;
  padding: 60px 15px;
  min-height: calc(100vh - 160px);
`

Content.defaultProps = {
  width: '100%',
}

export default Content
