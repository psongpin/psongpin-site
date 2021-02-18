import { FC } from 'react'
import moment from 'moment'
import cn from 'classnames'
import Head from 'next/head'
import styled from 'styled-components'

import { Text, Heading } from '../components/common'
import Profile from '../components/Profile'
import ProfExp from '../components/ProfExp'
import getTimeDiff from '../utils/time'
import { personalStuff, skills, professionalExp } from '../data/about'

const classNames = {
  sectionHead: 'text-2xl font-bold mb-4',
  list: 'list-disc list-inside',
}

const Wrapper = styled.div`
  min-height: calc(100vh - 9rem);
`

const Content = styled.div`
  max-width: 800px;
`

const About: FC<{}> = () => {
  const title = `About | Paul Simon Ongpin's Personal Website`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Wrapper className="px-4 py-16">
        <Content className="mx-auto w-100">
          <div className="mb-16">
            <Profile
              name="Paul Simon Ongpin"
              title="Front-end Developer, Engineer, Programmer, Coder, whatever..."
            />
          </div>

          <div className="mb-16">
            <Heading.h2 className={classNames.sectionHead}>About Me</Heading.h2>
            <Text.p>
              {`Hello! My name is Paul. I live in the beautiful islands of Philippines `}
              <span role="img" aria-label="Philippines">
                🇵🇭
              </span>
              {`. I make my living as a Front-end Developer for ${getTimeDiff(
                moment(),
                moment(new Date('2015-11-23'))
              )}. I am currently working as a React Front-end Developer. Prior to that, I used to be a
                Wordpress Theme developer for 2 years. I really love doing CSS stuff. I must say, I made the
                right choice!`}
            </Text.p>
            <Text.p>For personal things, I:</Text.p>
            <ul className="list-disc list-inside">
              {personalStuff.map(stuff => (
                <Text.li key={stuff}>{stuff}</Text.li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <Heading.h2 className={classNames.sectionHead}>
              Professional Experience
            </Heading.h2>
            {professionalExp.map(profExp => (
              <ProfExp
                key={profExp.company}
                company={profExp.company}
                info={profExp.info}
                description={profExp.description}
              />
            ))}
          </div>

          <div className="mb-16">
            <Heading.h2 className={classNames.sectionHead}>
              Skills and Proficiency
            </Heading.h2>
            <Heading.h3 className="text-lg font-bold mb-4">
              General Development Skills
            </Heading.h3>
            <div className="md:flex mb-6">
              <ul className={cn('md:flex-1 md:w-1/2 w-full', classNames.list)}>
                {skills.set1.map(skill => (
                  <Text.li key={skill}>{skill}</Text.li>
                ))}
              </ul>
              <ul className={cn('md:flex-1 md:w-1/2 w-full', classNames.list)}>
                {skills.set2.map(skill => (
                  <Text.li key={skill}>{skill}</Text.li>
                ))}
              </ul>
            </div>

            <Heading.h3 className="text-lg font-bold mb-4">
              React.js Related Skills and Libraries
            </Heading.h3>
            <div className="md:flex mb-6">
              <ul className={cn('md:flex-1 md:w-1/2 w-full', classNames.list)}>
                {skills.set3.map(skill => (
                  <Text.li key={skill}>{skill}</Text.li>
                ))}
              </ul>
              <ul className={cn('md:flex-1 md:w-1/2 w-full', classNames.list)}>
                {skills.set4.map(skill => (
                  <Text.li key={skill}>{skill}</Text.li>
                ))}
              </ul>
            </div>
          </div>
        </Content>
      </Wrapper>
    </>
  )
}

export default About
