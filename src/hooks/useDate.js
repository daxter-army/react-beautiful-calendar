// custom hook to get the number of days, and the starting day of the month
// I am taking months from index 0
const useDate = (month, year) => {
    const totalDays = new Date(year, month + 1, 0).getDate()
    const startDay = new Date(year, month).toString().split(' ')[0]
    const endDay = new Date(year, month + 1, 0).toString().split(' ')[0]
    return [startDay, totalDays, endDay]
}

export default useDate