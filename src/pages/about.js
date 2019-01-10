import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Content, PrimaryText } from '../components/common'
import Profile from '../components/Profile'
import ProfessionalExperience from '../components/ProfessionalExperience'

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.colors.highlighted};
  margin-top: 0;
  margin-bottom: 1em;
`

const SkillsGroup = styled.div`
  display: flex;

  ul {
    margin: 0;
  }
`

const SkillGroupTitle = styled.h3`
  margin-bottom: 0;
  color: ${props => props.theme.colors.highlighted};
`

const personalStuff = [
  'am a breadwinner of my family (making a living to support my mother and siblings’ education).',
  'teach tech stuff to interesting people and career-shifters.',
  'love reading useful matierials like coding resources and docs.',
  'am a dog lover.',
  'motivated to do Open-Source!',
  'travel for food.',
  'like cute stuff!',
]

const professionalExp = [
  {
    company: 'Laguro - Front-end Software Engineer',
    info:
      'August 2018 - Present (Remote / Full-time - San Leandro, California)',
    description:
      'At Laguro, my primary job as a Front-end Software Engineer is build UI interfaces for the dental industry product application of the company. We engineered the applications using React-Apollo stacks. My core competency in the team is my ability to deal with complex UI styling.',
  },
  {
    company: 'Freelance Front-end Developer',
    info: 'Present (Remote / Part-time) ',
    description:
      'As a Freelance Developer, I do all sorts of front-end projects ranging from Design to HTML/CSS Convertion, Static Site Development (currently using Gatsby but used Wordpress before), Front-end troubleshooting, and UI prototype development.',
  },
  {
    company: 'MergeCommit Inc. - Front-end Software Engineer',
    info: 'December 2017 - October 2018 (Pasig, Metro Manila, Philippines)',
    description:
      'During the course of my stay at the company, I helped a team of software engineers to build a Multi-Platform Crypto Currency Exchange.  This is a two-facing application and built with multiple microservices. Started as a React-Redux architecture but later on refactored as React-Apollo application to harness the power and potential of GraphQL technology. In the company’s case, it boosted the quality of developer experience (DX) which resulted to faster iteration and shipping to production.',
  },
  {
    company: 'Starfish Web Design Philippines - Front-end Web Developer',
    info: 'November 2015 - October 2017 (Makati, Metro Manila, Philippines)',
    description:
      'My experience in the digital/design agency involves more on the design and UI aspects of web development. I worked as their Front-end developer mainly focusing on Wordpress Theme development and Responsive Web Design. For 2 years, I gained a lot of experience with dealing complex yet aesthetic designs for the web. I build my expertise with CSS during my stay in the company.',
  },
  {
    company: 'Volunteer Speaker - Free Code Camp (Manila / Batangas City)',
    info: 'February 2017 - Present (Metro Manila / Batangas City, Philippines)',
    description: `For the Manila group, I have been actively participating on monthly Meetups. I usually present talks about CSS stuff and basic Front-end skill development. We have an awesome 3k+ members in th community! Currently since my relocation to Batangas City, I am trying to rebuild the same community in my place. I am still in the doorsteps of it but, I have been talking a lot with schools / colleges about the possibility of collaboration between Free Code Camp and their campus!`,
  },
]

const skills = {
  set1: [
    'Git and Github',
    'HTML5 / CSS3',
    'Responsive Web Design',
    'SASS',
    'Basic Design Skills (Figma)',
  ],
  set2: ['Javascript (ES6)', 'React.js', 'JQuery', 'Basic Node.js'],
  set3: [
    'React Router',
    'React-Apollo',
    'Formik',
    'Styled-Components / Emotion',
    'Ant-Design',
    'Recompose',
    'Lodash',
  ],
  set4: [
    'Gatsby',
    'React Testing Library / Enzyme',
    'Jest',
    'Redux',
    'Render Props and HOC patterns',
    'React Context API',
    'React Hooks',
  ],
}

const About = () => (
  <Layout>
    <SEO title="About" />
    <Content>
      <Profile
        name="Paul Simon Ongpin"
        title="Front-end Developer, Engineer, Programmer, Coder, whatever..."
      />

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <p>
          {
            'Hello! My name is Paul. I live in the beautiful islands of Philippines'
          }
          <span role="img" aria-label="Philippines">
            {' '}
            🇵🇭
          </span>
          {`. I make my living as a Front-end Developer for more
          than 3 years. I self-learned React and its ecosystem. I used to be a
          Wordpress Theme developer for 2 years before jumping in the React
          bandwagon/hype. I really love doing CSS stuff. I must say, I made the
          right choice!`}
        </p>
        <p>For personal things, I:</p>
        <ul>
          {personalStuff.map(stuff => (
            <li key={stuff}>
              <p>{stuff}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle>Professional Experience</SectionTitle>
        {professionalExp.map(profExp => (
          <ProfessionalExperience
            key={profExp.company}
            company={profExp.company}
            info={profExp.info}
            description={profExp.description}
          />
        ))}
      </Section>

      <Section>
        <SectionTitle>Skills and Proficiency</SectionTitle>
        <SkillGroupTitle>General Development Skills</SkillGroupTitle>
        <SkillsGroup>
          <ul>
            {skills.set1.map(skill => (
              <li key={skill}>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
          <ul>
            {skills.set2.map(skill => (
              <li key={skill}>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </SkillsGroup>
        <SkillGroupTitle>React.js Related Skills and Libraries</SkillGroupTitle>
        <SkillsGroup>
          <ul>
            {skills.set3.map(skill => (
              <li key={skill}>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
          <ul>
            {skills.set4.map(skill => (
              <li key={skill}>
                <p>
                  {skill}
                  {skill === 'React Hooks' && <PrimaryText> NEW!</PrimaryText>}
                </p>
              </li>
            ))}
          </ul>
        </SkillsGroup>
      </Section>
    </Content>
  </Layout>
)

export default About
