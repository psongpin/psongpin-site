import moment from 'moment'
import getTimeDiff from '../utils/time'

export const personalStuff: string[] = [
  'am a breadwinner of my family (making a living to support my mother and siblings’ education). 👨‍👩‍👦',
  'teach tech stuff to interesting people and career-shifters. 👨‍🏫',
  'love reading useful matierials like coding resources and docs. 📄',
  'am a dog lover. 🐶',
  'motivated to do Open-Source! 👨‍💻',
  'travel for food. 🍛',
  'like cute stuff! ♥️',
  'am a Pokemon Trainer 🎮',
]

export const professionalExp: {
  company: string
  info: string
  description: string
}[] = [
  {
    company: 'Freelance Front-end Developer',
    info: 'Present (Remote / Part-time) ',
    description:
      'As a freelancer, I worked on projects that were best suited for my skill sets with React and similar library stacks like Apollo-Graphql, Tailwind, Next.js',
  },
  {
    company: 'High Output Ventures — Front-end Software Engineer',
    info: `June 2020 - December 2020 (Remote / Full-time - Singapore / Pakistan) ${getTimeDiff(
      moment(new Date('2020-12-31')),
      moment(new Date('2020-06-1'))
    )}`,
    description:
      'For this company, most of my contributions were on the rebuilding of their main website. I was also the one who introduced Next.JS, Tailwind CSS front-end stack for their future projects. I was the main proponent of their internal design system with Tailwind CSS.',
  },
  {
    company: 'Laguro - Front-end Software Engineer',
    info: `August 2018 - December 2019 (Remote / Full-time - San Leandro, California) ${getTimeDiff(
      moment(new Date('2019-12-9')),
      moment(new Date('2018-08-30'))
    )}`,
    description: `Worked for the startup company's product and internal tools for dental care as Front End Developer. Frontend stack includes: Apollo, GraphQL, React, NextJS. Mainly worked on the dental portal part of the company. It was a tool mainly built to support dental processes and patient record documentation.`,
  },
  {
    company: 'MergeCommit Inc. - Front-end Software Engineer',
    info: `December 2017 - October 2018 (Pasig, Metro Manila, Philippines) ${getTimeDiff(
      moment(new Date('2018-10-1')),
      moment(new Date('2017-12-5'))
    )}`,
    description:
      'Worked as Front End Developer for blockchain-based products and services that MergeCommit is offering. Frontend stack includes: Apollo, GraphQL, React. My work focused on building a white-labeled solution for creating a cryptocurrency trading platform. Most of my contributions were on the UI implementation and reworking of the old redux architecture to Graphql-based front-end and React hooks (which at this time period was experimental and a new feature).',
  },
  {
    company: 'Starfish Web Design Philippines - Front-end Web Developer',
    info: `November 2015 - October 2017 (Makati, Metro Manila, Philippines) ${getTimeDiff(
      moment(new Date('2017-10-30')),
      moment(new Date('2015-11-23'))
    )}`,
    description:
      'Wordpress Theme Developer and UI developer of the company. Converted elegant and well-crafted designs into Responsive Websites. Maintained a legacy site written in Laravel, JQuery and Vanilla Javascript.',
  },
  {
    company:
      'Volunteer Speaker - Free Code Camp (Manila / Batangas City) and ReactJS Philippines',
    info: `February 2017 - Present (Metro Manila / Batangas City, Philippines) ${getTimeDiff(
      moment(),
      moment(new Date('2017-2-1'))
    )}`,
    description: `Collaborated with fellow members and admins to organize events and meetups. Volunteered as a speaker for Basic Web Development concepts for new developers and career shifters.`,
  },
]

export const skills: {
  set1: string[]
  set2: string[]
  set3: string[]
  set4: string[]
} = {
  set1: [
    'Git and Github',
    'HTML5 / CSS3',
    'Responsive Web Design',
    'SASS',
    'Basic Design Skills (Figma)',
  ],
  set2: ['Javascript (ES6)', 'React.js', 'JQuery', 'Basic Node.js'],
  set3: [
    'Next.js',
    'React-Apollo',
    'Styled-Components / Emotion',
    'Tailwind CSS',
    'Gatsby',
    'Ant-Design',
    'React Router',
    'Framer-motion',
    'React-Hook-Form',
  ],
  set4: [
    'Formik',
    'React Testing Library / Enzyme',
    'Jest',
    'Lodash',
    'Redux',
    'Render Props and HOC patterns',
    'React Context API',
    'React Hooks',
  ],
}
