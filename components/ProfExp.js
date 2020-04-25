import PropTypes from 'prop-types'
import { Heading, Text } from './common'

const ProfExp = ({ company, info, description }) => (
  <div className="mb-6">
    <Heading as="h3" className="text-lg m-0 leading-normal font-bold">
      {company}
    </Heading>
    <Text colorAttr="heading" className="italic">
      {info}
    </Text>
    <Text>{description}</Text>
  </div>
)

ProfExp.propTypes = {
  company: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProfExp
