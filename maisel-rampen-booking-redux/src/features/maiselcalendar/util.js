import {weekDays} from './constants'
import { getDaysInMonth, getMonth, getYear } from 'date-fns';
import dayjs from 'dayjs';

export function getMonthCalendar(startingDate) {
    const year = startingDate.getFullYear();
    const month = startingDate.getMonth();
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

export const range = (end) => {
    const results = Array.from({length: end}, (_, i) => i + 1)
    return results;
};

export const getSortedDays = (month, year) => {
    const dayIndex = new Date(year, month, 1).getDay();
    return [...weekDays.slice(dayIndex), ...weekDays.slice(0, dayIndex)];
};

export const getDateObj = (day, month, year) => {
    return new Date(year, month, year);
};

export const areDatesTheSame = (first, second) => {
    return (
        first.getFullYear() === second.getFullYear() && 
        first.getMonth() === second.getMonth() && 
        first.getDate() === second.getDate()
    );
};

