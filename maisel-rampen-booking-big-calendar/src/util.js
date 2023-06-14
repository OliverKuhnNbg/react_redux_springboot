import dayjs from 'dayjs';

export function getCurrentDayDate(day) {
    console.info('got current date: ' + dayjs().format("DD-MM-YY"));
    return dayjs();
}