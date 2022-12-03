import dayjs from 'dayjs'

export const parseDate =  (date,formatType="YYYY-MM-DD hh:mm:ss") => {
    return dayjs(date).format(formatType)
}