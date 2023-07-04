import {weekDays} from './constants'
import { getDaysInMonth, getMonth, getYear } from 'date-fns';
import dayjs from 'dayjs';

export function getMonthCalendar(startingDate) {
    const year = startingDate.getFullYear();
    const month = startingDate.getMonth();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

    return getMonthlyDayMatrix(firstDayOfMonth, month, year);
}

function getMonthlyDayMatrix(firstDayOfMonth, month, year) {
    let currentMonthCount = 0 - firstDayOfMonth;
    const daysMatrix = new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        })
    });

    return daysMatrix;
}

export function getDayCalendar(startingDate) {
    const year = startingDate.getFullYear();
    const month = startingDate.getMonth();
    const day = startingDate.getDate();

    let currentMonthCount = 0;
    let i = 0;
    const hourMatrix = new Array(24).fill([]).map(() => {
        i++
        let j = 0;
        return new Array(2).fill(null).map(() => {
            j++;
            if(j === 1) {
                return dayjs(new Date(year, month, day, i-1, 0, 0));
            } else {
                return dayjs(new Date(year, month, day, i-1, 30, 0));
            }
        })
    })

    return hourMatrix;
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

export const isDateToday = (first, second) => {
    let check = first.getDate() === second.getDate() && first.getMonth() === second.getMonth() && first.getFullYear() === second.getFullYear() ? true : false;
    return check;
};



