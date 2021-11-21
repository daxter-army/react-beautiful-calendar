export const weekdaysNameArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']

export const monthsNameArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

export const monthToIndex = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'June': 5,
    'July': 6,
    'Aug': 7,
    'Sept': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11,
}

export const indexToMonth = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
}

export const indexToMonthFull = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
}

// Equals to the number of grids in which we want to fill years - 1, subject to be changed
export const yearsArrLimit = 17

export const generateYearsArr = (lLim, rLim) => {
    const yearsArray = []

    for(let i = lLim; i <= rLim; i++) {
      yearsArray.push(i)
    }

    return yearsArray
  }