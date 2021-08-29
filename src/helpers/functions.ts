import moment from 'moment'

export const getFormattedDate = (date: Date, format = 'DD MMMM') => moment(date).format(format)
