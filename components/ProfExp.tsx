import { FC } from 'react'
import { Heading, Text } from './common'

interface Props {
  company: string
  info: string
  description: string
}

const ProfExp: FC<Props> = ({ company, info, description }) => (
  <div className="mb-6">
    <Heading.h3 className="text-lg m-0 leading-normal font-bold">
      {company}
    </Heading.h3>
    <Text.p colorAttr="heading" className="italic">
      {info}
    </Text.p>
    <Text.p>{description}</Text.p>
  </div>
)

export default ProfExp
