import dayjs from 'dayjs';

const holidays = {
    'christmasDay': {
        day: 25,
        month: 12
    },
    'newYearsDay': {
        day: 1,
        month: 1
    },
}

export const getNextFiveWorkingDays = (today: Date): String[] => {
    let nextFiveWorkingDays: String[] = [];
    let dayToAdd: Date = dayjs(today).add(1,'day').toDate();
    let numberOfDaysToAdd = 5;

    /* To change it to just figure out which of the next 5 days are working days it would be a case of reversing the
       while to count up to 5 rather than down to 0
    */
    while (numberOfDaysToAdd > 0) {
        let formattedDate = dayjs(dayToAdd).format('YYYY-MM-DD')
        if (checkDateIsValid(dayToAdd) && isWeekday(dayToAdd) && isNotHoliday(dayToAdd)) {
            console.log('Current date ' + formattedDate + ' is a working day');
            nextFiveWorkingDays.push(formattedDate);
            numberOfDaysToAdd--;
        } else {
            console.log('Current date ' + formattedDate + ' is not a working day');
        }

        dayToAdd = dayjs(dayToAdd).add(1, 'day').toDate();
    }

    if (nextFiveWorkingDays.length === 5) {
        return nextFiveWorkingDays;
    } else {
        throw new Error('Error: Length of nextFiveWorkingDays array is ' + nextFiveWorkingDays.length);
    }
}

const checkDateIsValid = (inputDate: Date): boolean => {
    if (inputDate === undefined) {
        throw new Error('Input date is undefined')
    }
    return true
}

const isWeekday = (inputDate: Date): boolean => {
    let dayToTest: number = dayjs(inputDate).day()
    return !(dayToTest == 6 || dayToTest == 0);
}

const isNotHoliday = (inputDate: Date): boolean => {
    /* Ideally I would call https://www.gov.uk/bank-holidays.json to also get bank holidays for greater holiday
       coverage. You would also need work to take into account things like Easter which changes every year
    */
    return !((dayjs(inputDate).day() === holidays.christmasDay.day && dayjs(inputDate).month() === holidays.christmasDay.month) ||
      (dayjs(inputDate).day() === holidays.newYearsDay.day && dayjs(inputDate).month() === holidays.newYearsDay.month));
};

console.log("The next five working days are: " + getNextFiveWorkingDays(new Date()));
