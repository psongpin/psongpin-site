import PropTypes from 'prop-types'

import Avatar from './Avatar'
import { Text, Heading } from './common'

const Profile = ({ name, title }) => (
  <div className="flex flex-col items-center justify-center">
    <Avatar />
    <Heading className="text-2xl font-black mt-8 mb-0" colorAttr="primary">
      {name}
    </Heading>
    <Text className="text-lg mt-2 mb-0 text-center">
      {'< '}
      {title}
      {' />'}
    </Text>
  </div>
)

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Profile
