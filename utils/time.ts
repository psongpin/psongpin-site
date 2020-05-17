import { Moment } from 'moment'

const getTimeDiff = (a: Moment, b: Moment): string => {
  const years = a.diff(b, 'years')
  b.add(years, 'years')
  const months = a.diff(b, 'months')

  const monthsString =
    months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''

  const yearsString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''

  return `${yearsString}${
    years > 0 && months > 0 ? ' and ' : ''
  }${monthsString}`
}

export default getTimeDiff
