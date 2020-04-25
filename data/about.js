import moment from 'moment'
import getTimeDiff from '../utils/time'

export const personalStuff = [
  'am a breadwinner of my family (making a living to support my mother and siblings’ education). 👨‍👩‍👦',
  'teach tech stuff to interesting people and career-shifters. 👨‍🏫',
  'love reading useful matierials like coding resources and docs. 📄',
  'am a dog lover. 🐶',
  'motivated to do Open-Source! 👨‍💻',
  'travel for food. 🍛',
  'like cute stuff! ♥️',
  'am a Pokemon Trainer 🎮',
]

export const professionalExp = [
  {
    company: 'Laguro - Front-end Software Engineer',
    info: `August 2018 - December 2019 (Remote / Full-time - San Leandro, California) ${getTimeDiff(
      moment(new Date('2019-12-9')),
      moment(new Date('2018-08-30'))
    )}`,
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
    info: `December 2017 - October 2018 (Pasig, Metro Manila, Philippines) ${getTimeDiff(
      moment(new Date('2018-10-1')),
      moment(new Date('2017-12-5'))
    )}`,
    description:
      'During the course of my stay at the company, I helped a team of software engineers to build a Multi-Platform Crypto Currency Exchange.  This is a two-facing application and built with multiple microservices. Started as a React-Redux architecture but later on refactored as React-Apollo application to harness the power and potential of GraphQL technology. In the company’s case, it boosted the quality of developer experience (DX) which resulted to faster iteration and shipping to production.',
  },
  {
    company: 'Starfish Web Design Philippines - Front-end Web Developer',
    info: `November 2015 - October 2017 (Makati, Metro Manila, Philippines) ${getTimeDiff(
      moment(new Date('2017-10-30')),
      moment(new Date('2015-11-23'))
    )}`,
    description:
      'My experience in the digital/design agency involves more on the design and UI aspects of web development. I worked as their Front-end developer mainly focusing on Wordpress Theme development and Responsive Web Design. For 2 years, I gained a lot of experience with dealing complex yet aesthetic designs for the web. I build my expertise with CSS during my stay in the company.',
  },
  {
    company:
      'Volunteer Speaker - Free Code Camp (Manila / Batangas City) and ReactJS Philippines',
    info: `February 2017 - Present (Metro Manila / Batangas City, Philippines) ${getTimeDiff(
      moment(),
      moment(new Date('2017-2-1'))
    )}`,
    description: `For the Manila group, I have been actively participating on monthly Meetups. I usually present talks about CSS stuff and basic Front-end skill development. We have an awesome 3k+ members in th community! Currently since my relocation to Batangas City, I am trying to rebuild the same community in my place. I am still in the doorsteps of it but, I have been talking a lot with schools / colleges about the possibility of collaboration between Free Code Camp and their campus!`,
  },
]

export const skills = {
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
