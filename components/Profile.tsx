import { FC } from 'react'

import Avatar from './Avatar'
import { Text, Heading } from './common'

interface Props {
  name: string
  title: string
}

const Profile: FC<Props> = ({ name, title }) => (
  <div className="flex flex-col items-center justify-center">
    <Avatar />
    <Heading.h1 className="text-2xl font-black mt-8 mb-0" colorAttr="primary">
      {name}
    </Heading.h1>
    <Text.p className="text-lg mt-2 mb-0 text-center">
      {'< '}
      {title}
      {' />'}
    </Text.p>
  </div>
)

export default Profile
