import moment from 'moment'

export const getFormattedDate = (date: Date, format = 'DD MMMM') => moment(date).format(format)
export const sumInObject = (array: any[], key: string) => array.reduce((a, b) => a + (b[key] || 0), 0)
