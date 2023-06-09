import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

    let currentMonthCount = 0 - firstDayOfMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        })
    });

    return daysMatrix;
}

export function getCurrentDayClass(day) {
    let check = false;
    let isDayCurrent = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? true : false;
    console.log('get class test' + isDayCurrent);
    return isDayCurrent ? 'bg-blue-600 text-white rounded-full' : '';
}