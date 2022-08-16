import * as dayjs from 'dayjs'

export const getNextFiveWorkingDays = (inputDate: Date): Date[] => {
    const startDate = dayjs(inputDate);
    let nextFiveWorkingDays: Date[] = [];
    let dayToAdd = startDate.format('YYYY-MM-DD');
    let numberOfDays = 5;

    while (numberOfDays > 0) {
        if (checkDateIsValid(dayToAdd) && isWeekday(dayToAdd) && isNotHoliday(dayToAdd) === true) {
            nextFiveWorkingDays.push(dayjs(dayToAdd).toDate());
        }
        dayjs(dayToAdd).add(1, 'day');
        numberOfDays =- 1;
    }

    if (nextFiveWorkingDays.length === 5) {
        return nextFiveWorkingDays;
    } else {
        throw new Error('Length of nextFiveWorkingDays array is: ' + nextFiveWorkingDays.length);
    }
}

const checkDateIsValid = (dateToBeChecked: String): boolean => {
  if (dayjs.isDayjs(dateToBeChecked)) {

}
    return true
}

export const isWeekday = (inputDate: String): boolean => {
    if (inputDate)
    return true;
}

export const isNotHoliday = (inputDate: String): boolean => {
    return true;
}

getNextFiveWorkingDays(new Date(2022-10-19));
